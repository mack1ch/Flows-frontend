'use client';
'use client';

import styles from './ui.module.scss';
import { IPost } from '@/shared/interface/post';
import Link from 'next/link';
import PostComplete from '../../../../../public/assets/postComplete.svg';
import { PostProcess } from '../process';
import { getUserFI } from '@/shared/lib/parse/user';
import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews';
import { useState } from 'react';
import Image from 'next/image';

export const NewsArticle = ({ item }: { item?: IPost }) => {
    const [isPostComplete, setPostComplete] = useState(false);
    if (!item) return;
    return (
        <>
            <article key={item.id} className={styles.article}>
                <section className={styles.article__data}>
                    <Link
                        title={item.proposal.name}
                        href={`/flows/view/${item.proposal.id}`}
                        className={styles.h3}>
                        {item.proposal.name}
                    </Link>
                    <PostProcess setPostComplete={setPostComplete} proposal={item.proposal} />
                </section>
                <section className={styles.article__post_info}>
                    <Link className={styles.user_FI} href="/profile">
                        {getUserFI(item.proposal.author)}{' '}
                        {item.proposal.author.job && `/ ${item.proposal.author?.job?.name}`}
                    </Link>
                    <LikesAndViews post={item} isLiked={item.isLiked} />
                </section>
            </article>
        </>
    );
};
