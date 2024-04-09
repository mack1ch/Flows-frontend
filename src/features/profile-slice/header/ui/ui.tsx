'use client';

import { UserAvatar } from '@/entities/profile-slice/avatar';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { IUser } from '@/shared/interface/user';
import { getAuthUser, logOut } from '../api';
import { getUserFI, getUserTelegram } from '@/shared/lib/parse/user';
import { formatAgeFromString } from '@/shared/lib/parse/birthday';
import Link from 'next/link';
import { Button, message } from 'antd';
import { useRouter } from 'next/navigation';

export const ProfileHeader = () => {
    const router = useRouter();
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        async function getUser() {
            const authUser: IUser | Error = await getAuthUser();
            if (authUser instanceof Error) return;
            setUser(authUser);
        }
        getUser();
    }, []);
    if (!user) return;

    const handleLogOut = async () => {
        try {
            const res = await logOut();
            if (!(res instanceof Error)) {
                sessionStorage.removeItem('accessToken');
                router.push('/auth');
            }
        } catch (error) {
            message.error('Ошибка');
        }
    };
    return (
        <>
            <section className={styles.header}>
                <span className={styles.bG} />
                <div className={styles.layout}>
                    <UserAvatar avatarLink={user?.avatar} />
                    <div className={styles.profile}>
                        <div className={styles.user}>
                            <h2 className={styles.h2}>{getUserFI(user)}</h2>
                            <span className={styles.tags}>
                                <h3 className={styles.h3}>{user.job.name}</h3>
                                <span className={styles.circle} />
                                <h3 className={styles.h3}>{formatAgeFromString(user.birthday)}</h3>
                                <span className={styles.circle} />
                                <Link
                                    className={styles.h3__link}
                                    href={'https://t.me/' + getUserTelegram(user.telegram)}>
                                    {user.telegram}
                                </Link>
                            </span>
                        </div>
                        <Button onClick={handleLogOut} size="middle" type="default" danger>
                            Выход
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
