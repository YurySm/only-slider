import cls from './PageError.module.scss';
import clsx from 'clsx';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {

    const reload = () => {
        location.reload();
    };

    return (
        <div className={ clsx(cls.pageError, className) }>
            <p className={ cls.title }>
                {'Произошла непредвиденная ошибка'}
            </p>
            <button
                onClick={ reload }
                type="button"
                className={ cls.btn }
            >
                {'Обновить страницу'}
            </button>
        </div>
    );
};
