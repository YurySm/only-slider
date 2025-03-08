import cls from './EventSliderItem.module.scss'

interface EventSliderItemProps {
    className?: string;
    year: number;
    text: string;
}

export const EventSliderItem = ({ className, year, text }: EventSliderItemProps) => {
    return (
        <div className={ className }>
            <span className={ cls.year }>{year}</span>
            <p className={ cls.text }>{text}</p>
        </div>
    );
};