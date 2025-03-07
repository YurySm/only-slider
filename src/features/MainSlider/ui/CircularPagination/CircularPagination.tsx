import { RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { FakeDataItem } from 'shared/lib/fakeData';
import { Swiper as SwiperCore } from 'swiper';
import cls from './CircularPagination.module.scss'
import clsx from 'clsx';


interface CircularPaginationProps {
    swiperRef: RefObject<SwiperCore | null>
    paginationRef: RefObject<HTMLDivElement | null>
    activeTab: number
    slides: FakeDataItem[]
}

const CircularPagination = ({ swiperRef, paginationRef, activeTab, slides }: CircularPaginationProps) => {
    const updatePaginationPosition = (index: number) => {
        const buttons = paginationRef.current?.children;
        if (!buttons) return

        const angleIncrement = (2 * Math.PI) / slides.length;
        const offsetAngle = -index * angleIncrement; // Смещение для активной кнопки вверху

        gsap.to(buttons, {
            rotation: (i) => (i * angleIncrement + offsetAngle + 0.6) * (180 / Math.PI), // Угол в градусах
            duration: 0.6,
            ease: 'power2.out',
            transformOrigin: 'center 265px', //
        });
    };

    // Обработчик изменения слайда
    const handleSlideChange = (activeTab: number) => {
        updatePaginationPosition(activeTab);
    };

    useEffect(() => {
        handleSlideChange(activeTab)
    }, [activeTab]);

    return (
        <div
            ref={ paginationRef }
            className={ cls.wrapper }
        >
            {slides.map((_, index) => (
                <button
                    key={ index }
                    onClick={ () => swiperRef.current?.slideTo(index) }
                    className={ clsx(cls.paginationBtn, { [cls.active]: index === activeTab }) }
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default CircularPagination;