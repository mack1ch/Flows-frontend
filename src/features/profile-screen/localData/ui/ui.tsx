import { IUser } from '@/shared/interface/user';
import { getAuthUser } from '../api';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserTelegram } from '@/shared/lib/parse/user';

export const LocalData = () => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser | Error = await getAuthUser();
            if (fetchUser instanceof Error) return;
            else {
                setUser(fetchUser);
            }
        };
        GetUser();
    }, []);
    if (!user) return;
    return (
        <>
            <div className={styles.layout}>
                <h3 className={styles.h3}>Личные данные</h3>
                <article className={styles.card}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            width: '100%',
                        }}>
                        <div
                            className={styles.contentTitle}
                            style={{ flex: '0 0 30%', textAlign: 'left' }}>
                            Telegram:
                        </div>
                        <Link
                            className={styles.link}
                            href={`${'https://t.me/' + getUserTelegram(user.telegram)}`}
                            style={{ flex: '1', textAlign: 'left' }}>
                            {user.telegram}
                        </Link>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            width: '100%',
                        }}>
                        <div
                            className={styles.contentTitle}
                            style={{ flex: '0 0 30%', textAlign: 'left' }}>
                            Почта:
                        </div>
                        <div className={styles.item} style={{ flex: '1', textAlign: 'left' }}>
                            {user.email}
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            width: '100%',
                        }}>
                        <div
                            className={styles.contentTitle}
                            style={{ flex: '0 0 30%', textAlign: 'left' }}>
                            Должность:
                        </div>
                        <div className={styles.item} style={{ flex: '1', textAlign: 'left' }}>
                            {user.job.name}
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};
