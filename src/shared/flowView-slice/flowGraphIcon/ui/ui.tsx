import { CSSProperties, ReactNode } from 'react';
import styles from './ui.module.scss';
import Image from 'next/image';
import Check from '../../../../../public/icons/check-green.svg';
export const FlowGraphIcon = ({
    color,
    text,
    isFinish = false,
}: {
    color?: CSSProperties['background'];
    text?: ReactNode | string;
    isFinish?: boolean;
}) => {
    return (
        <>
            {isFinish ? (
                <span className={styles.isFinishCircle}>
                    <Image src={Check} width={16} height={16} alt="Выполнено" />
                </span>
            ) : (
                <span style={{ background: color }} className={styles.circle}>
                    {text}
                </span>
            )}
        </>
    );
};
