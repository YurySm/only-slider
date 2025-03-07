import cls from './BigYears.module.scss'
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { fakeData } from 'shared/lib/fakeData';

interface BigYearsProps {
    className?: string;
    activeTab: number
}

export const BigYears = ({ className, activeTab }: BigYearsProps) => {
    const dateFromRef = useRef<HTMLDivElement>(null);
    const dateToRef = useRef<HTMLDivElement>(null);

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
        <div className={ clsx(cls.bigYears, className) }>
            <div className={ clsx(cls.year, cls.dateFrom) } ref={ dateFromRef }>{}</div>
            <div className={ clsx(cls.year, cls.dateTo) } ref={ dateToRef }>{}</div>
        </div>
    );
};