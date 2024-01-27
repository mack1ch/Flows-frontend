'use client'

import { NewsTag } from '@/shared/ui/news-slice/tag/'
import styles from './ui.module.scss'
import { CreaterUser } from '@/shared/ui/news-slice/createrUser'
import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews'
import { IPost } from '@/shared/interface/post'
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/shared/lib/parse/firstLetter'

export const NewsArticle = ({ flowItem, isUserLikedPost }: { flowItem: IPost; isUserLikedPost: boolean }) => {
    return (<>
        <article className={styles.article}>
            <div className={styles.main}>
                <h3 className={styles.article__title}>
                    <Link
                        title={capitalizeFirstLetter(flowItem.proposal.name)}
                        href={`/flows/view/${flowItem.proposal.id}`} >
                        {capitalizeFirstLetter(flowItem.proposal.name)}
                    </Link>
                </h3>
                <div className={styles.article__tags}>
                    <NewsTag text='Интересное' />
                    <NewsTag text='Работа' />
                </div>
                <CreaterUser user={flowItem?.proposal?.author} />
            </div>
            <div className={styles.footer}>
                <LikesAndViews isLiked={isUserLikedPost} post={flowItem} />
            </div>
        </article>
    </>)
}