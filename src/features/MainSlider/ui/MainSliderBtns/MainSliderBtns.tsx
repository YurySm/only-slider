import cls from './MainSliderBtns.module.scss'
import clsx from 'clsx';
import LeftIcon from 'shared/assets/icons/slider/arrow-left.svg'
import RightIcon from 'shared/assets/icons/slider/arrow-right.svg'
import LeftMobIcon from 'shared/assets/icons/slider/arrow-left-mob.svg'
import RightMobIcon from 'shared/assets/icons/slider/arrow-right-mob.svg'


interface MainSliderBtnsProps {
    className?: string;
    isMob?: boolean
}

export const MainSliderBtns = ({ className, isMob = false }: MainSliderBtnsProps) => {
    return (
        <div className={ clsx(cls.mainSliderBtns, {}, [className]) }>
            <button
                className={ clsx(cls.swiperBtn, 'swiper-button-prev') }>
                {isMob ? <LeftMobIcon/> : <LeftIcon/>}
            </button>
            <button
                className={ clsx(cls.swiperBtn, 'swiper-button-next') }>
                {isMob ? <RightMobIcon/> : <RightIcon/>}
            </button>
        </div>
    );
};