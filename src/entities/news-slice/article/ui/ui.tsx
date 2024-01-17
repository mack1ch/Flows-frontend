'use client'

import { NewsTag } from '@/shared/ui/news-slice/tag/'
import styles from './ui.module.scss'
import { CreaterUser } from '@/shared/ui/news-slice/createrUser'
import { useEffect, useState } from 'react'
import { IUser } from '@/shared/interface/user'
import { GetAuthUserData } from '../api'
import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews'

export const NewsArticle = () => {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser | Error = await GetAuthUserData();
            if (fetchUser instanceof Error) GetUser();
            else {
                setUser(fetchUser)
            }
        };
        GetUser();
    }, []);
    return (<>
        <article className={styles.article}>
            <div className={styles.main}>
                <h3 className={styles.article__title}>Сокращение рутинной ручной работы</h3>
                <div className={styles.article__tags}>
                    <NewsTag text='Интересное' />
                    <NewsTag text='Работа' />
                </div>
                <CreaterUser User={user} />
            </div>
            <div className={styles.footer}>
                <LikesAndViews/>
            </div>
        </article>
    </>)
}