'use client';

import React, { useEffect, useState } from 'react';
import { FirstStarIcon, SecondStarIcon, ThirdStarIcon } from '../ratingIcons';
import styles from './ui.module.scss';
import { IPost } from '@/shared/interface/post';
import { getAuthUserData, getRatingPosts } from '../api';
import { getUserFIO } from '@/shared/lib/parse/user';
import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/shared/lib/parse/firstLetter';
import { IUser } from '@/shared/interface/user';

export const RatingTable = () => {
    const [ratingPosts, setRatingPosts] = useState<IPost[]>([] as IPost[]);
    const [authUser, setAuthUser] = useState<IUser>({} as IUser);
    const filteredFlows: IPost[] | null = ratingPosts
        ? ratingPosts.filter((flow) => {
              const hasStatus = flow.proposal.history.some(
                  (history) =>
                      history.status.statusType === 'proposalDone' ||
                      history.status.statusType === 'proposalInWork',
              );
              return hasStatus;
          })
        : null;

    useEffect(() => {
        const GetFlows = async () => {
            const fetchPosts: IPost[] | Error = await getRatingPosts();
            if (fetchPosts instanceof Error) return;

            setRatingPosts(fetchPosts);
        };
        const GetAuthUser = async () => {
            const fetchUser: IUser | Error = await getAuthUserData();
            if (fetchUser instanceof Error) return;
            setAuthUser(fetchUser);
        };
        GetAuthUser();
        GetFlows();
    }, []);
    return (
        <>
            <section className={styles.section}>
                <table
                    className={styles.table}
                    cellSpacing="5"
                    style={{ borderSpacing: '16px 32px' }}
                    width="100%">
                    <tbody>
                        <tr>
                            <td align="left" className={styles.tableHeader}>
                                Место
                            </td>
                            <td align="left" className={styles.tableHeader}>
                                Название
                            </td>
                            <td align="left" className={styles.tableHeader}>
                                Автор
                            </td>
                            <td align="left" className={styles.tableHeader} />
                        </tr>
                        {filteredFlows?.map((item, index) => {
                            const userFIO = getUserFIO(item.proposal.author);
                            const ratingPos = index + 1;
                            return (
                                <React.Fragment key={item.id}>
                                    <tr key={item.id} className={styles.tableBody__place}>
                                        <td align="center" className={styles.place}>
                                            {ratingPos === 1 ? (
                                                <FirstStarIcon />
                                            ) : ratingPos === 2 ? (
                                                <SecondStarIcon />
                                            ) : ratingPos === 3 ? (
                                                <ThirdStarIcon />
                                            ) : (
                                                ratingPos
                                            )}
                                        </td>
                                        <td className={styles.postName}>
                                            <Link
                                                title={capitalizeFirstLetter(item.proposal.name)}
                                                href={`/flows/view/${item.proposal.id}`}>
                                                {capitalizeFirstLetter(item.proposal.name)}
                                            </Link>
                                        </td>
                                        <td className={styles.postCreater}>{userFIO}</td>
                                        <td className={styles.likesAndviews}>
                                            <span className={styles.td__item}>
                                                <LikesAndViews
                                                    isLiked={item.isLiked}
                                                    post={item}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr
                                        key={`separator-${item.id}`}
                                        style={{ borderBottom: '1px solid #ebebeb' }}
                                    />
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </>
    );
};
