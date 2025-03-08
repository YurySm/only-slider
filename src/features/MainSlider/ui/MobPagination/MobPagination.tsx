import cls from './MobPagination.module.scss'
import clsx from 'clsx';
import { RefObject } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import { FakeDataItem } from 'shared/lib/fakeData';

interface MobPaginationProps {
    className?: string;
    swiperRef: RefObject<SwiperCore | null>
    paginationRef: RefObject<HTMLDivElement | null>
    activeTab: number
    slides: FakeDataItem[]
}

export const MobPagination = ({ className, paginationRef, swiperRef, activeTab, slides }: MobPaginationProps) => {

    return (
        <div
            ref={ paginationRef }
            className={ clsx(cls.mobPagination, className) }
        >
            {slides.map((_, index) => (
                <button
                    key={ index }
                    onClick={ () => swiperRef.current?.slideTo(index) }
                    className={ clsx(cls.mobPaginationBtn, { [cls.mobPaginationBtnActive]: index === activeTab }) }
                />
            ))}
        </div>
    );
};