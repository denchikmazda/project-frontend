import { MutableRefObject, useEffect } from 'react';

export interface useInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: useInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
