'use client';

import { NewsArticle } from '@/entities/news-slice/article';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { IPost } from '@/shared/interface/post';
import { getPosts } from '../api';

export const Articles = () => {
    const [flows, setFlows] = useState<IPost[] | null>(null);

    useEffect(() => {
        const GetPosts = async () => {
            const fetchPosts: IPost[] | Error = await getPosts();
           
            if (fetchPosts instanceof Error) return;
            else {
                fetchPosts;
                setFlows(fetchPosts);
            }
        };

        GetPosts();
    }, []);
    return (
        <>
            <section className={styles.wrap}>
                {flows?.map((item) => (
                    <NewsArticle item={item} key={item.id} />
                ))}
            </section>
        </>
    );
};
