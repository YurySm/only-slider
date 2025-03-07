import cls from './Counters.module.scss'
import clsx from 'clsx';
import { addLeadingZero } from 'shared/lib/addLeadingZero';

interface CountersProps {
    className?: string;
    activeTab: number
    allItems: number
}

export const Counters = ({ className, activeTab, allItems }: CountersProps) => {
    return (
        <span className={ clsx(cls.counters, className) }>
            {addLeadingZero(activeTab + 1)}/{addLeadingZero(allItems)}
        </span>
    );
};