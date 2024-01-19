'use client'

import { NewsTag } from '@/shared/ui/news-slice/tag/'
import styles from './ui.module.scss'
import { CreaterUser } from '@/shared/ui/news-slice/createrUser'
import { useEffect, useState } from 'react'
import { IUser } from '@/shared/interface/user'
import { GetAuthUserData } from '../api'
import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews'
import { IFlow } from '@/shared/interface/flow'

export const NewsArticle = ({ flowItem }: { flowItem: IFlow }) => {

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
                <LikesAndViews />
            </div>
        </article>
    </>)
}