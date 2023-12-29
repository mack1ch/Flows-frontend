'use client';

import { NavLogo } from '@/shared/header/navLogo';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Divider, Drawer, Radio, Space } from 'antd';
import { SideBarProfileItem, SideNavBarItems } from '../../data/items';
import { IHeaderItem } from '@/shared/interface/header';
import { NavItem } from '@/shared/header/navItem';
import { IUser } from '@/shared/interface/user';
import { GetAuthUserData } from '../../api';

export const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
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
                    <button
                        onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
                        className={styles.burger__btn}>
                        <span
                            style={{ marginTop: '4px' }}
                            className={`
                               ${styles.burger__stick} ${
                                isBurgerMenuOpen
                                    ? styles.stick__active__first
                                    : styles.stick__disable
                            }
                           `}
                        />
                        <span
                            style={{ marginBottom: '4px' }}
                            className={`
                           ${styles.burger__stick} ${
                                isBurgerMenuOpen
                                    ? styles.stick__active__second
                                    : styles.stick__disable
                            }
                       `}
                        />
                    </button>
                </section>
            </header>
            <Drawer
                placement={placement}
                closable={false}
                onClose={onDrawerCloseByBurgerClick}
                open={isBurgerMenuOpen}
                key={placement}>
                <section style={{ marginTop: '80px' }} className={styles.header__items}>
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
