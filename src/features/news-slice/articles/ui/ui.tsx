'use client'

import { NewsArticle } from '@/entities/news-slice/article'
import styles from './ui.module.scss'

export const Articles = () => {
    return (
        <>
            <section className={styles.wrap}>
                <NewsArticle />
                <NewsArticle />
                <NewsArticle />
                <NewsArticle />
                <NewsArticle />
                <NewsArticle />
                <NewsArticle />
                <NewsArticle />
            </section>

        </>
        )
}