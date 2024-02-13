'use client';

import styles from './ui.module.scss';
import InverseFlows from '../../../../../public/assets/inverseFlows.svg';
import Image from 'next/image';
import { DFooter } from '../data';
import Link from 'next/link';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
export const Footer = () => {
    const { width, height } = useWindowSize();
    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.forward}>
                    <div className={styles.column}>
                        <Image
                            src={InverseFlows}
                            alt="Inverse.Заявки"
                            width={width < 460 ? 263 : width < 970 ? 300 : width > 1200 ? 492 : 340}
                            height={width < 460 ? 29 : width < 970 ? 33 : width > 1200 ? 54 : 43}
                        />
                        <h3 className={styles.phone}>7-966-701-17-18</h3>
                    </div>
                    <div className={styles.row}>
                        {DFooter.map((item) => (
                            <ul className={styles.wrap} key={item.id}>
                                <h4 className={styles.title}>{item.title}</h4>
                                {item.subItems.map((subItems, index) => (
                                    <Link
                                        className={styles.subItem}
                                        key={index}
                                        href={subItems.href}>
                                        {subItems.name}
                                    </Link>
                                ))}
                            </ul>
                        ))}
                    </div>
                </section>
                <span className={styles.divider} />
                <section className={styles.under}>
                    <h5 className={styles.h5}>© 2024. Inverse Заявки</h5>
                    <span className={styles.row}>
                        <Link href="/" className={styles.link}>
                            Оферта
                        </Link>
                        <Link href="/" className={styles.link}>
                            Политика конфиденциальности
                        </Link>
                    </span>
                    <h5 className={styles.h5}>by Inverse</h5>
                </section>
            </footer>
        </>
    );
};
