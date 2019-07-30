import { Observable, fromEvent, interval, NEVER } from 'rxjs';
import { filter, tap, startWith, map, switchMap } from 'rxjs/operators';

export function pausableInterval(): Observable<number> {
  const paused$ = fromEvent(document, 'keyup').pipe(
    // emit every keyup event
    filter((e: KeyboardEvent) => e.code === 'Space'), // pass only spacebar keyup
    tap(_ => (this.paused = !this.paused)), // toggle paused property
    startWith(this.paused),
    map(e => this.paused)
  );

  let i = 0;
  const fps = 60;
  const ticker = interval(1000 / fps).pipe(map(() => i++));

  return paused$.pipe(switchMap(paused => (paused ? NEVER : ticker))); // switch to ticker if observable is paused or to empty observable
}
