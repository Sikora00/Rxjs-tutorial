import { interval, NEVER, Observable, Observer, timer, fromEvent } from 'rxjs';
import {
  map,
  switchMap,
  takeUntil,
  filter,
  tap,
  startWith
} from 'rxjs/operators';

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
