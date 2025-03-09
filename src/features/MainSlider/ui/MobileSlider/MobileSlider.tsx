import cls from './MobileSlider.module.scss'
import { BigYears } from '../BigYears/BigYears';
import { FakeDataItem } from 'shared/lib/fakeData';
import { Counters } from '../Countes/Counters';
import { MainSliderBtns } from '../MainSliderBtns/MainSliderBtns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectFade, Navigation, Pagination, Virtual } from 'swiper/modules';
import { EventSliderItem } from 'entities/EventSliderItem';
import { MobPagination } from '../MobPagination/MobPagination';
import { RefObject } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';
import clsx from 'clsx';

interface MobileSliderProps {
    swiperRef: RefObject<SwiperCore | null>
    paginationRef: RefObject<HTMLDivElement | null>
    activeTab: number
    slides: FakeDataItem[]
    handelSetActiveTab: (tab: number) => void
}

export const MobileSlider = ( props: MobileSliderProps) => {
    const {
        swiperRef,
        paginationRef,
        activeTab,
        slides,
        handelSetActiveTab
    } = props

    return (
        <>
            <BigYears
                activeTab={ activeTab }
            />

            <p className={ cls.mobTitle }>{slides[activeTab].title}</p>

            <Swiper
                className={ cls.bigSlider }
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
                    handelSetActiveTab(swiperRef?.current?.activeIndex || 0)
                } }
                allowTouchMove={ false }
            >
                {
                    slides.map((el, index) => (
                        <SwiperSlide
                            key={ `${el.title}-${index}` }>
                            <Swiper
                                modules={ [Virtual] }
                                spaceBetween={ 15 }
                                slidesPerView={ 1.5 }
                                touchRatio={ 1.5 }
                                freeMode={ true }
                                watchSlidesProgress={ true }
                                edgeSwipeDetection={ true }
                                virtual
                                navigation={{
                                    nextEl: `.swiper-inner-button-next-${index}`,
                                    prevEl: null,
                                }}
                            >
                                {
                                    el.items.map(({ year, text }, index) => (
                                        <SwiperSlide
                                            className={ cls.innerSlider }
                                            virtualIndex={ index }
                                            key={ `${year}-${index}` }
                                            style={{ border: '1px solid black' }}
                                        >
                                            <EventSliderItem
                                                className={ clsx(cls.innerSlide) }
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

            <div className={ cls.countersWrapp }>
                <div>
                    <Counters
                        activeTab={ activeTab }
                        allItems={ slides.length }/>

                    <MainSliderBtns
                        isMob={ true }
                    />
                </div>
                <MobPagination
                    className={ cls.mobPagination }
                    activeTab={ activeTab }
                    slides={ slides }
                    paginationRef={ paginationRef }
                    swiperRef={ swiperRef }
                />
            </div>
        </>
    );
};