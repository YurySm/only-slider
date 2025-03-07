import cls from './MainSliderBtns.module.scss'
import clsx from 'clsx';

interface MainSliderBtnsProps {
    className?: string;
}

export const MainSliderBtns = ({ className }: MainSliderBtnsProps) => {
    return (
        <div className={ clsx(cls.mainSliderBtns, {}, [className]) }>
            <button
                className={ clsx(cls.swiperBtn, 'swiper-button-prev') }>
                {'<'}
            </button>
            <button
                className={ clsx(cls.swiperBtn, 'swiper-button-next') }>
                {'>'}
            </button>
        </div>
    );
};