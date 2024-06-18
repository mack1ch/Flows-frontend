'use client';
'use client';

import styles from './ui.module.scss';
import { IPost } from '@/shared/interface/post';

import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews';
import { useState } from 'react';
import AvatarSkeleton from '../../../../../public/icons/avatar-black.svg';
import { formatDateToDateAndTime } from '@/shared/lib/parse/date';
export const NewsArticle = ({ item }: { item?: IPost }) => {
    const [isPostComplete, setPostComplete] = useState(false);
    if (!item) return;
    return (
        <>
            <article className={styles.card} key={item.id}>
                <section className={styles.user}>
                    <span
                        className={styles.avatar}
                        style={{
                            backgroundImage: `url(${
                                item.proposal.author.avatar || AvatarSkeleton.src
                            })`,
                        }}
                    />
                    <div className={styles.user__info}>
                        <h4 className={styles.name}>
                            {item.proposal.author.firstname + ' ' + item.proposal.author.surname ||
                                'Загрузка'}
                        </h4>
                        <p className={styles.date}>
                            {formatDateToDateAndTime(item.proposal.createdAt.toString())}
                        </p>
                    </div>
                </section>
                <section className={styles.flow}>
                    <h3 className={styles.title}>{item.proposal.name}</h3>
                    <p className={styles.description}>{item.proposal.description}</p>
                </section>
                <section className={styles.rating}>
                    <LikesAndViews post={item} />
                </section>
            </article>
        </>
    );
};
