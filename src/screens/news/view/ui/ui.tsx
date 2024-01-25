
import styles from './ui.module.scss'
import { Articles } from '@/features/news-slice/articles';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';

export const NewsViewScreen = () => {
    
    return (<>
        <div className={styles.layout}>
            <PageHeaderWithBackArray pageName='Лента' />
            <Articles />
        </div>
    </>)
} 