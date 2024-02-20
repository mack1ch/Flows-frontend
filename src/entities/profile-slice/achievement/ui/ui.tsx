import Image from 'next/image';
import styles from './ui.module.scss';
import Asset from '../../../../../public/assets/achievements.png';
import { AchievementProgressBar } from '../progressBar';
export const Achievement = () => {
    return (
        <>
            <article className={styles.article}>
                <Image src={Asset} width={86} height={86} alt="Achievement" />
                <h5 className={styles.h5}>Король идей</h5>
                <AchievementProgressBar currentValue={5} maxValue={10} />
                <p className={styles.descriptions}>Поставьте 10 лайков на заявки других</p>
                <div className={styles.item}>25 баллов</div>
            </article>
        </>
    );
};
