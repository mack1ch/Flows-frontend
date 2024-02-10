import styles from './ui.module.scss';
import InverseFlows from '../../../../../public/assets/inverseFlowLogoOddaval.svg';
import Image from 'next/image';
import { DNav } from '../data';
import Link from 'next/link';
export const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <section className={styles.logo}>
                    <Image src={InverseFlows} width={161} height={15} alt="Inverse Заявки" />
                </section>
                <section className={styles.row}>
                    <nav className={styles.nav}>
                        {DNav.map((item) => (
                            <Link className={styles.item} key={item.id} href={item.href}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <button className={styles.button}>Попробовать</button>
                </section>
            </div>
        </>
    );
};
