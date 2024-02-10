import { CSSProperties, ReactNode } from 'react';
import styles from './ui.module.scss';
export const Layout = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => {
    return (
        <>
            <main style={style} className={styles.layout}>
                {children}
            </main>
        </>
    );
};
