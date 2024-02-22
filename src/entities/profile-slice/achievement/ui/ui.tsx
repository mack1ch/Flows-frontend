import { IAchievement } from '@/shared/interface/achievement';
import styles from './ui.module.scss';
import { ProgressBar } from '../progressBar';

export const Achievement = ({ achievement }: { achievement: IAchievement }) => {
    if (!achievement) return;
    return (
        <>
            <article className={styles.card}>
                <span
                    style={{ backgroundImage: `url(${achievement?.achievementType?.cover})` }}
                    className={styles.cover}
                />
                <div className={styles.info}>
                    <h4 className={styles.h4}>{achievement.achievementType.name}</h4>
                    <ProgressBar achievement={achievement} />
                    <p className={styles.p}>{achievement.achievementType.description}</p>
                </div>
                <span className={styles.tag}>{achievement.achievementType.points} баллов</span>
            </article>
        </>
    );
};
