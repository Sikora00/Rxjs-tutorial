import { Observable, from } from 'rxjs';

import { Post, Comment } from '@rxjs-tutorial/data';

import { posts } from './posts';

import { switchMap, concatMap, map, reduce } from 'rxjs/operators';

import { httpGet } from './utils';

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
