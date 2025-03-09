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
        const offsetAngle = -index * angleIncrement;

        gsap.to(buttons, {
            rotation: (i) => (i * angleIncrement + offsetAngle + 0.6) * (180 / Math.PI),
            duration: 1,
            ease: 'power2.out',
            transformOrigin: 'center 292px',
        });

        Array.from(buttons).forEach((button, i) => {
            const buttonAngle = (i * angleIncrement + offsetAngle + 0.6) * (180 / Math.PI);
            gsap.to(button.querySelector('span'), {
                rotation: -buttonAngle,
                duration: 1,
                ease: 'power2.out',
            });
        });
    };

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
            {slides.map((slide, index) => (
                <button
                    key={ index }
                    onClick={ () => swiperRef.current?.slideTo(index) }
                    className={ clsx(cls.paginationBtn, { [cls.active]: index === activeTab }) }
                >
                    <span
                        className={ cls.count }
                    >
                        <span className={ cls.countWrapp }>{index + 1}</span>
                        <span className={ cls.title }>
                            {slide.title}
                        </span>
                    </span>
                </button>
            ))}
        </div>
    );
};

export default CircularPagination;