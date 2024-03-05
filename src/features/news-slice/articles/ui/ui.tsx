'use client';

import { NewsArticle } from '@/entities/news-slice/article';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { IPost } from '@/shared/interface/post';
import { getMyPosts, getPosts } from '../api';

export const Articles = ({ isMy = false }: { isMy?: boolean }) => {
    const [flows, setFlows] = useState<IPost[] | null>(null);

    useEffect(() => {
        const GetPosts = async () => {
            const fetchPosts: IPost[] | Error = await getPosts();

            if (fetchPosts instanceof Error) return;
            else {
                setFlows(fetchPosts);
            }
        };
        const GetMyPosts = async () => {
            const fetchPosts: IPost[] | Error = await getMyPosts();

            if (fetchPosts instanceof Error) return;
            else {
                setFlows(fetchPosts);
            }
        };

        if (isMy) {
            GetMyPosts();
        } else {
            GetPosts();
        }
    }, [isMy]);

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
