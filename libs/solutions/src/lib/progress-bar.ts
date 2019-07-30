import { Observable, interval, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

export function progressBar(): Observable<number> {
  const finishIn = 5 * 1000; // 5 seconds
  const step = 12; // 12 increasions of the progress ball
  const interval$ = interval(finishIn / step);
  const unsubscribe$ = timer(finishIn);
  return interval$.pipe(
    map(value => ++value), // ommit 0 value
    map(value => value * (100 / step)),
    takeUntil(unsubscribe$) // stop emitting after 10s
  );
}
