'use client';

import { IFlow } from '@/shared/interface/flow';
import styles from './ui.module.scss';
import { getProcessNumberValue } from '../model';
import { CSSProperties, useEffect } from 'react';
export const PostProcess = ({
    proposal,
    setPostComplete,
}: {
    proposal?: IFlow;
    setPostComplete: (arg: boolean) => void;
}) => {
    const { currentValue, maxValue } = getProcessNumberValue(
        proposal?.history?.at(-1)?.status.statusType,
    );
    const currentProgressBarWidth: CSSProperties['width'] = `calc(100% / ${maxValue} * ${currentValue})`;
    useEffect(() => {
        if (currentProgressBarWidth === 'calc(100% / 5 * 5)') {
            setPostComplete(true);
        }
    }, [currentProgressBarWidth]);
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.text}>
                    <h5 className={styles.h5}>Прогресс</h5>
                    <h5 className={styles.h5}>{`${currentValue}/${maxValue}`}</h5>
                </div>
                <div className={styles.progressBar}>
                    <span
                        style={{ width: currentProgressBarWidth }}
                        className={styles.currentValue}
                    />
                    <span className={styles.maxValue} />
                </div>
            </div>
        </>
    );
};
