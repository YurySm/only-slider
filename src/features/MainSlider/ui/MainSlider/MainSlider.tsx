import clsx from 'clsx';
import { fakeData } from 'shared/lib/fakeData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectFade, Navigation, Pagination, Virtual } from 'swiper/modules';
import { EventSliderItem } from 'entities/EventSliderItem';
import { BigYears } from 'entities/BigYears';
import { useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import { Counters } from '../Countes/Counters';
import { MainSliderBtns } from '../MainSliderBtns/MainSliderBtns';
import cls from './MainSlider.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';

interface MainSliderProps {
    className?: string;
}

export const MainSlider = ({ className }: MainSliderProps) => {
    const [activeTab, setActiveTab] = useState<number>(0)

    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <div className={ clsx(cls.mainSlider, className) }>
            <BigYears
                activeTab={ activeTab }
            />

            <Counters
                activeTab={ activeTab }
                allItems={ fakeData.length }/>

            <MainSliderBtns/>

            <div>
                <Swiper
                    style={{ marginTop: 50 }}
                    modules={ [Navigation, Pagination, A11y, EffectFade] }
                    effect={ 'fade' }
                    fadeEffect={{
                        crossFade: true,
                    }}
                    spaceBetween={ 50 }
                    slidesPerView={ 1 }
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    swipeHandler={ null }
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                    }}
                    onSwiper={ (swiper) => {
                        swiperRef.current = swiper;
                        console.log(swiper)
                    } }
                    onSlideChange={ () => {
                        console.log(swiperRef?.current?.activeIndex)
                        setActiveTab(swiperRef?.current?.activeIndex || 0)
                    } }
                    allowTouchMove={ false }
                >
                    {
                        fakeData.map((el, index) => (
                            <SwiperSlide
                                key={ `${el.title}-${index}` }>
                                <Swiper
                                    modules={ [Virtual] }
                                    spaceBetween={ 50 }
                                    slidesPerView={ 3.3 }
                                    virtual
                                    navigation={{
                                        nextEl: `.swiper-inner-button-next-${index}`,
                                        prevEl: null,
                                    }}
                                >
                                    {
                                        el.items.map(({ year, text }, index) => (
                                            <SwiperSlide
                                                virtualIndex={ index }
                                                key={ `${year}-${index}` }
                                                style={{ border: '1px solid black' }}
                                            >
                                                <EventSliderItem
                                                    year={ year }
                                                    text={ text }
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};