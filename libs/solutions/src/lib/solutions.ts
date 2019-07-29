import {
  interval,
  NEVER,
  Observable,
  Observer,
  timer,
  fromEvent,
  from,
  Subject
} from 'rxjs';
import {
  map,
  switchMap,
  takeUntil,
  filter,
  tap,
  startWith,
  concatMap,
  reduce,
  mergeMap
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post, Comment, Author } from '@rxjs-tutorial/data';

export function progressBar(): Observable<number> {
  const finishIn = 5 * 1000;
  const step = 12;
  const interval$ = interval(finishIn / step);
  const unsubscribe$ = timer(finishIn);
  return interval$.pipe(
    map(value => ++value), // ommit 0 value
    map(value => value * (100 / step)),
    takeUntil(unsubscribe$) // stop emitting after 10s
  );
}

export function pausableInterval(): Observable<number> {
  const paused$ = fromEvent(document, 'keyup').pipe(
    filter((e: KeyboardEvent) => e.code === 'Space'),
    tap(_ => (this.paused = !this.paused)),
    startWith(this.paused),
    map(e => this.paused)
  );

  let i = 0;
  const fps = 60;
  const ticker = interval(1000 / fps).pipe(map(() => i++));

  return paused$.pipe(switchMap(paused => (paused ? NEVER : ticker)));
}

export function posts(src: string): Observable<Post[]> {
  return httpGet<Post[]>(src);
}

export function postCommentAuthor(
  posrSrc: string,
  commentsSrc: string,
  authorSrc: string,
  progress: Subject<number>
): Observable<Post[]> {
  let postsCount;
  let resolvedPosts = 0;
  return posts(posrSrc).pipe(
    tap((posts: Post[]) => (postsCount = posts.length)),
    switchMap((posts: Post[]) => from(posts)),
    concatMap((post: Post) =>
      httpGet(authorSrc + '/' + post.userId.toString()).pipe(
        map((author: Author) => {
          post.author = author;
          resolvedPosts++;
          progress.next((resolvedPosts / postsCount) * 100);
          return post;
        })
      )
    ),
    reduce((acc: Post[], value: Post) => {
      acc.push(value);
      return acc;
    }, [])
  );
}

export function postsWithComments(
  postsSrc: string,
  commentsSrc: string
): Observable<Post[]> {
  return posts(postsSrc).pipe(
    switchMap((posts: Post[]) => from(posts)),
    concatMap((
      post: Post // concat to load one by one or merge to load all together
    ) =>
      httpGet(commentsSrc + '?postId=' + post.id.toString()).pipe(
        map((comments: Comment[]) => {
          post.comments = comments;
          return post;
        })
      )
    ),
    reduce((acc: Post[], value: Post) => {
      acc.push(value);
      return acc;
    }, [])
  );
}

function httpGet<T>(src): Observable<T> {
  return from(fetch(src).then(res => res.json()));
}
