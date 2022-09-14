import { Subject } from 'rxjs';

export const ParallaxScrollEvents$: Subject<number> = new Subject<number>();

export const ScrollToEvents$: Subject<number> = new Subject<number>();

export default ParallaxScrollEvents$;
