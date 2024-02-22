import { IAchievement } from '@/shared/interface/achievement';
import styles from './ui.module.scss';
import { CSSProperties } from 'react';

export const ProgressBar = ({ achievement }: { achievement: IAchievement }) => {
    const currentWithSize: CSSProperties['width'] = `${
        (achievement.currentProgress / achievement.achievementType.totalProgress) * 100
    }%`;
    return (
        <>
            <div className={styles.layout}>
                <div
                    style={{ width: currentWithSize === '0%' ? '90%' : undefined }}
                    className={styles.barLayout}>
                    <span style={{ width: currentWithSize }} className={styles.current} />
                </div>
                <p className={styles.p}>
                    {achievement.currentProgress} / {achievement.achievementType.totalProgress}
                </p>
            </div>
        </>
    );
};
