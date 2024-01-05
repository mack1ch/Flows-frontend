import { ReactNode } from 'react';
import styles from './ui.module.scss';
export const PageTitle = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <h1 className={styles.h1}>{children}</h1>
        </>
    );
};
