import { Observable } from 'rxjs';

import { Post } from '@rxjs-tutorial/data';
import { httpGet } from './utils';

export function posts(src: string): Observable<Post[]> {
  return httpGet<Post[]>(src);
}
