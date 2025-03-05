import './Loader.scss';
import clsx from 'clsx';

interface PageLoaderProps {
    className?: string;
}

export const Loader = ({ className }: PageLoaderProps) => (
    <div className={ clsx('lds-roller', className) }>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
