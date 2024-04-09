'use client';

import styles from './ui.module.scss';
import { SideNavBarItems, SideBarProfileItem } from '../../data/items';
import { NavItem } from '@/shared/ui/header-slice/navItem';
import { CSSProperties, useEffect, useState } from 'react';
import { IUser } from '@/shared/interface/user';
import { GetAuthUserData } from '../../api';
import { IHeaderItem } from '@/shared/interface/header';
import { NavLogo } from '@/shared/ui/header-slice/navLogo';

export const SideHeader = ({ style }: { style?: CSSProperties }) => {
    const [profileData, setProfileData] = useState<IHeaderItem>(SideBarProfileItem);
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser | Error = await GetAuthUserData();
            if (fetchUser instanceof Error) return;
            else {
                const userName: string = fetchUser.firstname + ' ' + fetchUser.surname;
                setProfileData((prevProfileData: IHeaderItem) => ({
                    ...prevProfileData,
                    title: userName || 'Профиль',
                    path: prevProfileData?.path || '/profile',
                }));
            }
        };
        GetUser();
    }, []);

    return (
        <header style={style} className={styles.header__layout}>
            <section className={styles.header__logo}>
                <NavLogo />
            </section>
            <section className={styles.header__items}>
                <div className={styles.items}>
                    {SideNavBarItems.map((item: IHeaderItem, idx: number) => {
                        return <NavItem key={idx} item={item} />;
                    })}
                </div>
                <div className={styles.items}>
                    <NavItem key={5} item={profileData} />
                </div>
            </section>
        </header>
    );
};
