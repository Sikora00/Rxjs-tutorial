import { Subject, Observable, from } from 'rxjs';
import { Post, Author } from '@rxjs-tutorial/data';
import { posts } from './posts';
import { tap, switchMap, concatMap, map, reduce } from 'rxjs/operators';
import { httpGet } from './utils';

export function postCommentAuthor(
    posrSrc: string,
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
  