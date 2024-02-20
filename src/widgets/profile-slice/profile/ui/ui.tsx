'use client';

import { UserAvatar } from '@/entities/profile-slice/avatar';
import styles from './ui.module.scss';
import { Button, ConfigProvider, ThemeConfig } from 'antd';
import { Logout } from '@/shared/ui/icons/logout';
import { useEffect, useState } from 'react';
import { IUser } from '@/shared/interface/user';
import { getAuthUser } from '../api/getAuthUser';
import { getUserFIO } from '@/shared/lib/parse/user';
import { logoutUser } from '../api/userLogout';
import { useRouter } from 'next/navigation';
import { LocalData } from '@/features/profile-screen/localData';
import { Achievements } from '@/features/profile-screen/achievement';

export const Profile = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const router = useRouter();
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
            <ConfigProvider theme={profileTheme}>
                <div className={styles.layout}>
                    <span className={styles.bg} />
                    <section className={styles.userFirstBlock}>
                        <div className={styles.user}>
                            <UserAvatar avatarLink={user.avatar} />

                            <div className={styles.userInfo}>
                                <h2 className={styles.userFIO}>{getUserFIO(user)}</h2>
                                <h4 className={styles.job}>{user.department.name}</h4>
                                <ul className={styles.achievementsList}>
                                    <span className={styles.achievement}>250 баллов</span>
                                    <span className={styles.achievement}>250 баллов</span>
                                    <span className={styles.achievement}>250 баллов</span>
                                </ul>
                            </div>
                        </div>
                        <Button onClick={() => logoutUser()} icon={<Logout />}>
                            Выйти из аккаунта
                        </Button>
                    </section>
                    <section className={styles.userLocalData}>
                        <LocalData />
                        <Achievements />
                    </section>
                </div>
            </ConfigProvider>
        </>
    );
};

const profileTheme: ThemeConfig = {
    components: {
        Button: {
            colorPrimaryHover: '#FF645B',
            colorText: '##FF645B',
            colorPrimaryActive: '#FF645B',
        },
    },
};
