
import styles from './ui.module.scss'
import { RatingTable } from '@/features/ratingTable-slice/rating';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';

export const RatingScreen = () => {

    return (<>
        <div className={styles.layout}>
            <PageHeaderWithBackArray pageName='Рейтинг' />
            <RatingTable />
        </div>
    </>)
} 