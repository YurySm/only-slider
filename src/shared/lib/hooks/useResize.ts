import { useEffect, useState } from 'react';

export const SCREEN_SM = 520;
export const SCREEN_MD = 768;
export const SCREEN_LG = 992;
export const SCREEN_XL = 1200;
export const SCREEN_XXL = 1400;

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: UIEvent) => {
            const target = event.target as Window;
            setWidth(target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isScreenSm: width <= SCREEN_SM,
        isScreenMd: width <= SCREEN_MD,
        isScreenLg: width <= SCREEN_LG,
        isScreenXl: width <= SCREEN_XL,
        isScreenXxl: width <= SCREEN_XXL,
    };
};