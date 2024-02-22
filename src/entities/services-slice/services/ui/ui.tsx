import Image from 'next/image';
import { DServices } from '../date';
import styles from './ui.module.scss';

export const Services = () => {
    return (
        <>
            <section className={styles.layout}>
                {DServices.map((item) => (
                    <article key={item.id} className={styles.service}>
                        <div className={styles.header}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                            <h3 className={styles.h3}>{item.title}</h3>
                        </div>
                        <p className={styles.p}>{item.description}</p>
                    </article>
                ))}
            </section>
        </>
    );
};
