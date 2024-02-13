import Image from 'next/image';
import { DCards } from '../data';
import styles from './ui.module.scss';

export const WorkSteps = () => {
    return (
        <>
            <div className={styles.layout}>
                <h2 id="work" className={styles.h2}>
                    Как работают “Inverse Заявки”?
                </h2>
                <section className={styles.cardWrap}>
                    {DCards.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <div className={styles.info}>
                                <h4 className={styles.h4}>{item.title}</h4>
                                <h3 className={styles.h3}>{item.id + 1}</h3>
                            </div>
                            <Image
                                style={{
                                    height: item.id === 0 ? '100%' : undefined,
                                    marginLeft: item.id === 1 || item.id === 2 ? '4%' : undefined,
                                }}
                                src={item.img}
                                alt={item.title}
                                className={styles.img}
                                layout="responsive"
                            />
                        </article>
                    ))}
                </section>
            </div>
        </>
    );
};
