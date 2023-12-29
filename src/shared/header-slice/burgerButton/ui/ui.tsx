import { useState } from 'react';
import styles from './ui.module.scss';

export const BurgerButton = ({
    isOpen = false,
    setOpen,
}: {
    isOpen: boolean;
    setOpen: (arg: boolean) => void;
}) => {
    return (
        <>
            <button onClick={() => setOpen(!isOpen)} className={styles.burger__btn}>
                <span
                    style={{ marginTop: '4px' }}
                    className={`
                               ${styles.burger__stick} ${
                        isOpen ? styles.stick__active__first : styles.stick__disable
                    }
                           `}
                />
                <span
                    style={{ marginBottom: '4px' }}
                    className={`
                           ${styles.burger__stick} ${
                        isOpen ? styles.stick__active__second : styles.stick__disable
                    }
                       `}
                />
            </button>
        </>
    );
};
