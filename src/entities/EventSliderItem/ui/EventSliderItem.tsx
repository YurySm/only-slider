import cls from './EventSliderItem.module.scss'
import clsx from 'clsx';

interface EventSliderItemProps {
    className?: string;
    year: number;
    text: string;
}

export const EventSliderItem = ({ className, year, text }: EventSliderItemProps) => {
    return (
        <div className={ clsx(cls.eventSliderItem, className) }>
            <span className={ cls.year }>{year}</span>
            <p className={ cls.text }>{text}</p>
        </div>
    );
};