import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { IHeaderItem } from '@/shared/interface/header';
import Image from 'next/image';
import Arrow from '../../../../../public/icons/arrow-black.svg';
import styles from './ui.module.scss';

export const NavItem = ({ item }: { item: IHeaderItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <nav>
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={` ${styles.element} ${
                            pathname?.includes(item.path) ? styles.element__active : ''
                        }`}>
                        <div className={styles.element__icon}>
                            {item.icon ? (
                                <Image src={item.icon} width={20} height={20} alt="Иконка" />
                            ) : null}
                            <span className={styles.element__title}>{item.title}</span>
                        </div>
                        {item.subMenuItems ? (
                            <div className={styles.element__arrow__container}>
                                <Image
                                    className={
                                        subMenuOpen
                                            ? styles.element__arrow__active
                                            : styles.element__arrow__notActive
                                    }
                                    src={Arrow}
                                    width={16}
                                    height={16}
                                    alt="Иконка"
                                />
                            </div>
                        ) : null}
                    </button>
                    <ul
                        className={
                            subMenuOpen
                                ? styles.element__item__list__active
                                : styles.element__item__list
                        }>
                        {item.subMenuItems?.map((subItem, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    href={subItem.path}
                                    className={`${styles.item} ${
                                        subItem.path === pathname ? styles.item__active : ''
                                    }`}>
                                    <span>{subItem.title}</span>
                                    {subItem.icon && (
                                        <Image
                                            src={subItem?.icon}
                                            width={16}
                                            height={16}
                                            alt="Icon"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`${
                        item.path === pathname ? styles.item__default__active : styles.item__default
                    }`}>
                    {item.icon ? (
                        <Image src={item.icon} width={20} height={20} alt="Иконка" />
                    ) : null}
                    <span className={styles.item__default__element__title}>{item.title}</span>
                </Link>
            )}
        </nav>
    );
};
