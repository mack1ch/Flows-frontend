import styles from './ui.module.scss';
import InverseFlows from '../../../../../public/assets/inverseFlowLogoOddaval.svg';
import Image from 'next/image';
import { DNav } from '../data';
import Link from 'next/link';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react'; // import component 👇
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
export const Header = () => {
    const { width = 1500, height } = useWindowSize();
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    return (
        <>
            <Drawer
                open={isBurgerMenuOpen}
                onClose={() => setBurgerMenuOpen((prevState) => !prevState)}
                direction="right"
                size="100vw"
                className={styles.drawer}>
                <nav className={styles.nav}>
                    {DNav.map((item) => (
                        <Link className={styles.item} key={item.id} href={item.href}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <Link href="auth" className={styles.button}>
                    Войти
                </Link>
            </Drawer>
            <div className={styles.header}>
                <section className={styles.logo}>
                    <Image src={InverseFlows} width={161} height={31} alt="Inverse Заявки" />
                </section>
                <section className={styles.row}>
                    {width >= 840 ? (
                        <>
                            <nav className={styles.nav}>
                                {DNav.map((item) => (
                                    <Link className={styles.item} key={item.id} href={item.href}>
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <Link href="auth" className={styles.button}>
                                Войти
                            </Link>
                        </>
                    ) : (
                        !width && (
                            <Hamburger toggled={isBurgerMenuOpen} toggle={setBurgerMenuOpen} />
                        )
                    )}
                </section>
            </div>
        </>
    );
};
