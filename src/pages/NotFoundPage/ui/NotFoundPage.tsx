import cls from './NotFoundPage.module.scss';
import clsx from 'clsx';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={ clsx(cls.notFountPage, className) }>
            {'Страница не найдена'}
        </div>
    );
};
