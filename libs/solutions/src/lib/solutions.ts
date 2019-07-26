import { Observable, of, timer, interval } from 'rxjs';
import { filter, takeUntil, map } from 'rxjs/operators';

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
