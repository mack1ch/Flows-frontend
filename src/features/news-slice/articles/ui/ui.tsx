'use client'

import { NewsArticle } from '@/entities/news-slice/article'
import styles from './ui.module.scss'
import { useEffect, useState } from 'react';
import { getAuthUserData, getFlows } from '../api';
import { IPost } from '@/shared/interface/post';
import { IUser } from '@/shared/interface/user';
import { checkIfUserLiked } from '@/shared/lib/parse/post';



export const Articles = () => {
    const [flows, setFlows] = useState<IPost[]>([] as IPost[]);
    const [authUser, setAuthUser] = useState<IUser>({} as IUser);
    useEffect(() => {
        const GetFlows = async () => {
            const fetchPosts: IPost[] | Error = await getFlows();
            if (fetchPosts instanceof Error) return
            else {
                fetchPosts
                setFlows(fetchPosts)
            }
        };
        const GetAuthUser = async () => {
            const fetchUser: IUser | Error = await getAuthUserData();
            if (fetchUser instanceof Error) return
            setAuthUser(fetchUser)

        };
        GetAuthUser()
        GetFlows();
    }, []);
    return (
        <>
            <section className={styles.wrap}>
                {
                    flows?.map((item) => {
                        const isUserLikedPost = checkIfUserLiked(item, authUser.id)
                        return (
                            <NewsArticle isUserLikedPost={isUserLikedPost} flowItem={item} key={item?.proposal?.id} />
                        )
                    })
                }
            </section>

        </>
    )
}