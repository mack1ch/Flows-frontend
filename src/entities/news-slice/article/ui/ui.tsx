'use client'

import { NewsTag } from '@/shared/ui/news-slice/tag/'
import styles from './ui.module.scss'
import { CreaterUser } from '@/shared/ui/news-slice/createrUser'
import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews'

import { IPost } from '@/shared/interface/post'

export const NewsArticle = ({ flowItem }: { flowItem: IPost }) => {

    return (<>
        <article className={styles.article}>
            <div className={styles.main}>
                <h3 className={styles.article__title}>{flowItem.name}</h3>
                <div className={styles.article__tags}>
                    <NewsTag text='Интересное' />
                    <NewsTag text='Работа' />
                </div>
                <CreaterUser user={flowItem?.author} />
            </div>
            <div className={styles.footer}>
                <LikesAndViews post={flowItem} />
            </div>
        </article>
    </>)
}