'use client'

import { NewsArticle } from '@/entities/news-slice/article'
import styles from './ui.module.scss'
import { useEffect, useState } from 'react';
import { IFlow } from '@/shared/interface/flow';
import { getFlows } from '../api';

export const Articles = () => {
    const [flows, setFlows] = useState<IFlow[]>([] as IFlow[]);
    useEffect(() => {
        const GetFlows = async () => {
            const fetchFlows: IFlow[] | Error = await getFlows();
            if (fetchFlows instanceof Error) return
            else {
                setFlows(fetchFlows)
            }
        };
        GetFlows();
    }, []);
    return (
        <>
            <section className={styles.wrap}>
                {
                    flows?.map((item) => (
                        <NewsArticle flowItem={item} key={item.id} />
                    ))
                }
            </section>

        </>
    )
}