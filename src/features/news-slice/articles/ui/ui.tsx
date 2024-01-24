'use client'

import { NewsArticle } from '@/entities/news-slice/article'
import styles from './ui.module.scss'
import { useEffect, useState } from 'react';
import { getFlows } from '../api';
import { IPost } from '@/shared/interface/post';


export const Articles = () => {
    const [flows, setFlows] = useState<IPost[]>([] as IPost[]);
    useEffect(() => {
        const GetFlows = async () => {
            const fetchPosts: IPost[] | Error = await getFlows();
            if (fetchPosts instanceof Error) return
            else {
                fetchPosts
                setFlows(fetchPosts)
            }
        };
        GetFlows();
    }, []);
    return (
        <>
            <section className={styles.wrap}>
                {
                    flows?.map((item) => (
                        <NewsArticle flowItem={item} key={item?.proposal?.id} />
                    ))
                }
            </section>

        </>
    )
}