import styles from './ui.module.scss';
import { IComment } from '@/shared/interface/comment';
import { useEffect, useState } from 'react';
import { getAuthUserData, getComments } from '../api';
import Link from 'next/link';
import { getUserFI } from '@/shared/lib/parse/user';
import { parseDateToTextFormat } from '@/shared/lib/parse/date';
import { parseTimeToRuFormat } from '@/shared/lib/parse/time';
import Avatar from '../../../../../public/icons/avatar-black.svg';
import { IUser } from '@/shared/interface/user';
export const Message = ({ flowID, comment }: { flowID: number; comment: IComment | null }) => {
    const [comments, setComments] = useState<IComment[] | null>();
    const [authUser, setAuthUser] = useState<IUser | null>(null);
    useEffect(() => {
        const GetComments = async () => {
            const fetchComments: IComment[] | Error = await getComments(flowID);
            if (fetchComments instanceof Error) return;
            else {
                setComments(fetchComments);
            }
        };
        const GetUser = async () => {
            const fetchUser: IUser | Error = await getAuthUserData();
            if (fetchUser instanceof Error) return;
            else {
                setAuthUser(fetchUser);
            }
        };
        GetUser();
        GetComments();
    }, []);
    useEffect(() => {
        if (!!comment) {
            setComments((prevComments) => (prevComments ? [...prevComments, comment] : [comment]));
        }
    }, [comment]);
    return (
        <>
            <section className={styles.commentsWrap}>
                {comments?.map((item) => (
                    <article key={item.id} className={styles.message}>
                        <span
                            style={{
                                backgroundImage: `url(${
                                    item.user.avatar ? item.user.avatar : Avatar.src
                                })`,
                            }}
                            className={styles.userIMG}
                        />
                        <div className={styles.messageInfo}>
                            <div className={styles.userInfo}>
                                <Link
                                    style={{
                                        color:
                                            item.user.id === authUser?.id ? '#73AE62' : undefined,
                                    }}
                                    className={styles.user}
                                    href="/profile">
                                    {getUserFI(item.user)}
                                </Link>
                                <span className={styles.date}>{`${parseDateToTextFormat(
                                    item.createdAt,
                                )}, ${parseTimeToRuFormat(item.createdAt)}`}</span>
                            </div>
                            <p className={styles.message}>{item.text}</p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
};
