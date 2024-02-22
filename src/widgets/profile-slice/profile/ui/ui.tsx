'use client';

import styles from './ui.module.scss';
import { ConfigProvider, Tabs, ThemeConfig } from 'antd';
import { ProfileHeader } from '@/features/profile-screen/header';
import { tabItems } from '../date';
import { useEffect, useState } from 'react';
import { IUser } from '@/shared/interface/user';
import { getAuthUser } from '../api';

export const Profile = () => {
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
    return (
        <>
            <ConfigProvider theme={profileTheme}>
                <div className={styles.layout}>
                    <ProfileHeader />
                    <section className={styles.tabs}>
                        <Tabs defaultActiveKey="1" items={tabItems} />
                    </section>
                </div>
            </ConfigProvider>
        </>
    );
};

const profileTheme: ThemeConfig = {
    components: {
        Tabs: {
            colorPrimary: '#449429',
            itemColor: '#757575',
            itemHoverColor: '#449429',
            itemSelectedColor: '#222',
            itemActiveColor: '#449429',
        },
        Button: {
            colorPrimary: '#449429',
            colorBgContainerDisabled: '#BAD6B1',
            colorTextDisabled: '#fff',
            colorPrimaryHover: '#73AE62',
            colorPrimaryActive: '#73AE62',
        },
    },
};
