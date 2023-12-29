'use client';

import { useEffect, useState } from 'react';

interface IWindowSizeHook {
    width: number;
    height: number;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<IWindowSizeHook>({
        width: 769,
        height: 769,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}
