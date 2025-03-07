import { Title } from 'shared/ui/Title/Title';
import { Container } from 'shared/ui/Container/Container';
import cls from './MainPage.module.scss';
import gsap from 'gsap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Virtual, EffectFade } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';

import { fakeData } from 'shared/lib/fakeData';
import { EventSliderItem } from 'entities/EventSliderItem';
import { ChangeEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import CircleDistribution from 'pages/MainPage/ui/CircleDistribution';
import clsx from 'clsx';
import { addLeadingZero } from 'shared/lib/addLeadingZero';


const MainPage = () => {
    const dateFromRef = useRef<HTMLDivElement>(null);
    const dateToRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState<number>(0)


    const swiperRef = useRef<SwiperCore | null>(null);

    const goToSlide = useCallback((index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    }, [swiperRef]);

    useEffect(() => {
        gsap.to(dateFromRef.current, {
            innerText: fakeData[activeTab].items[0].year,
            duration: 1,
            snap: { innerText: 1 },
        });

        gsap.to(dateToRef.current, {
            innerText: fakeData[activeTab].items[fakeData[activeTab].items.length - 1].year,
            duration: 1,
            snap: { innerText: 1 },
        });
    }, [activeTab])

    return (
        <Container>
            <div className={ cls.wrapper }>
                <Title
                    className={ cls.title }
                    variant={ 'h1' }
                >
                    Исторические даты
                </Title>

                {/*<CircleDistribution*/}
                {/*    elements={ fakeData }*/}
                {/*    radius={ 200 }*/}
                {/*    offsetAngle={ 40 }*/}
                {/*    activeIndex={ activeTab }*/}
                {/*/>*/}

                <div className={ cls.slidersWrapp }>
                    <div className={ cls.yearWrapp }>
                        <div className={ clsx(cls.year, cls.dateFrom) } ref={ dateFromRef }>{}</div>
                        <div className={ clsx(cls.year, cls.dateTo) } ref={ dateToRef }>{}</div>
                    </div>

                    <span
                        className={ cls.counters }>{addLeadingZero(activeTab + 1)}/{addLeadingZero(fakeData.length)}</span>

                    <div className={ cls.swiperBtnWrapp }>
                        <button
                            className={ clsx(cls.swiperBtn, 'swiper-button-prev') }>
                            {'<'}
                        </button>
                        <button
                            className={ clsx(cls.swiperBtn, 'swiper-button-next') }>
                            {'>'}
                        </button>
                    </div>

                    <div>


                        {/*<div>*/}
                        {/*    {*/}
                        {/*        fakeData.map((el, index) => (*/}
                        {/*            <button*/}
                        {/*                onClick={ () => goToSlide(index) }*/}
                        {/*                style={{ position: 'static', marginLeft: 30 }}*/}
                        {/*                className={ 'swiper-pagination' }*/}
                        {/*                key={ index }>*/}
                        {/*                {el.title}*/}
                        {/*            </button>*/}
                        {/*        ))*/}
                        {/*    }*/}
                        {/*</div>*/}


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
            </div>
        </Container>
    )
};

export default MainPage;
