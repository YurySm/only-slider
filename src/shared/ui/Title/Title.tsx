import clsx from 'clsx';
import { ReactNode } from 'react';
import cls from './Title.module.scss';


interface TitleProps {
    className?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
}

export const Title = ({ className, children, variant = 'h2' }: TitleProps) => {
    switch (variant) {
    case 'h1':
        return (
            <h1 className={ clsx(cls.h1, className) }>
                {children}
            </h1>
        )
    case 'h2':
        return (
            <h2 className={ clsx(cls.h2, className) }>
                {children}
            </h2>
        )
    }
};
