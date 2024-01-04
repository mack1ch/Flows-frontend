'use client';

import { NavLogo } from '@/shared/header-slice/navLogo';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import type { DrawerProps } from 'antd';
import { Divider, Drawer } from 'antd';
import { SideBarProfileItem, SideNavBarItems } from '../../data/items';
import { IHeaderItem } from '@/shared/interface/header';
import { NavItem } from '@/shared/header-slice/navItem';
import { IUser } from '@/shared/interface/user';
import { GetAuthUserData } from '../../api';
import { BurgerButton } from '@/shared/header-slice/burgerButton';

export const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [profileData, setProfileData] = useState<IHeaderItem>(SideBarProfileItem);
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser | Error = await GetAuthUserData();
            if (fetchUser instanceof Error) return;
            else {
                const userName: string = fetchUser.firstname + ' ' + fetchUser.lastname;
                setProfileData((prevProfileData: IHeaderItem) => ({
                    ...prevProfileData,
                    title: userName || 'Профиль',
                    path: prevProfileData?.path || '/profile',
                }));
            }
        };
        GetUser();
    }, []);
    const onDrawerCloseByBurgerClick = () => {
        setBurgerMenuOpen(false);
    };

    return (
        <>
            <header className={styles.header}>
                <section>
                    <NavLogo />
                </section>

                <section style={{ minWidth: '40px' }}>
                    <BurgerButton isOpen={isBurgerMenuOpen} setOpen={setBurgerMenuOpen} />
                </section>
            </header>
            <Drawer
                size="large"
                placement="right"
                closable={false}
                onClose={onDrawerCloseByBurgerClick}
                open={isBurgerMenuOpen}
                key="right">
                <section className={styles.header__items}>
                    <div className={styles.items}>
                        {SideNavBarItems.map((item: IHeaderItem, idx: number) => {
                            return <NavItem key={idx} item={item} />;
                        })}
                    </div>
                    <Divider />
                    <div className={styles.items}>
                        <NavItem item={profileData} />
                    </div>
                </section>
            </Drawer>
        </>
    );
};
