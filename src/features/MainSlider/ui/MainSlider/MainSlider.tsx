import clsx from 'clsx';
import { fakeData } from 'shared/lib/fakeData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectFade, Navigation, Pagination, Virtual } from 'swiper/modules';
import { EventSliderItem } from 'entities/EventSliderItem';
import { BigYears } from 'features/MainSlider/ui/BigYears';
import { useCallback, useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import { Counters } from '../Countes/Counters';
import { MainSliderBtns } from '../MainSliderBtns/MainSliderBtns';
import cls from './MainSlider.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';
import CircularPagination from '../CircularPagination/CircularPagination';
import { useResize } from 'shared/lib/hooks/useResize';
import { MobPagination } from 'features/MainSlider/ui/MobPagination/MobPagination';
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { DesktopSlider } from '../DesktopSlider/DesktopSlider';


interface MainSliderProps {
    className?: string;
}

export const MainSlider = ({ className }: MainSliderProps) => {
    const { isScreenMd } = useResize()
    const [activeTab, setActiveTab] = useState<number>(0)

    const handelSetActiveTab = useCallback((tab: number) => {
        setActiveTab(tab)
    }, [setActiveTab])

    const swiperRef = useRef<SwiperCore | null>(null);
    const paginationRef = useRef<HTMLDivElement>(null);

    if (isScreenMd) {
        return (
            <div className={ clsx(cls.mainSlider, className) }>
                <MobileSlider
                    swiperRef={ swiperRef }
                    paginationRef={ paginationRef }
                    activeTab={ activeTab }
                    slides={ fakeData }
                    handelSetActiveTab={ handelSetActiveTab }
                />
            </div>
        )
    }

    return (
        <div className={ clsx(cls.mainSlider, className) }>
            <DesktopSlider
                swiperRef={ swiperRef }
                paginationRef={ paginationRef }
                activeTab={ activeTab }
                slides={ fakeData }
                handelSetActiveTab={ handelSetActiveTab }
            />
        </div>
    );
};