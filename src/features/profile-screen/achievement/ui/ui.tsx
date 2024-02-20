import { Achievement } from '@/entities/profile-slice/achievement';
import styles from './ui.module.scss';

export const Achievements = () => {
    return (
        <>
            <div className={styles.layout}>
                <h2 className={styles.h3}>Достижения</h2>
                <div className={styles.wrap}>
                    <Achievement />
                    <Achievement />
                    <Achievement />
                    <Achievement />
                </div>
            </div>
        </>
    );
};
