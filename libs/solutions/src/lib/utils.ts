import { Observable, from } from "rxjs";

export function httpGet<T>(src): Observable<T> {
  return from(fetch(src).then(res => res.json()));
}
