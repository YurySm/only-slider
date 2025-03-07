import clsx from 'clsx';
import { ReactNode } from 'react';
import cls from './Container.module.scss';


interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={ clsx(cls.container, className) }>
            {children}
        </div>
    )
};
