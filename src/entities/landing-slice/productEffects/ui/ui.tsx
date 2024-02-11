import Image from 'next/image';
import { DCards } from '../data';
import styles from './ui.module.scss';
import { useWindowSize } from '@/shared/hooks/useWindowSize';

export const ProductEffects = () => {
    const { width, height } = useWindowSize();
    return (
        <>
            <div className={styles.layout}>
                <h2 className={styles.h2}>Зачем внедрять наш продукт?</h2>
                <section className={styles.cardWrap}>
                    {width > 650 ? (
                        DCards.map((item) => (
                            <article key={item.id} className={styles.card}>
                                <h4 className={styles.h4}>{item.title}</h4>
                                <Image
                                    className={styles.img}
                                    src={item.img}
                                    width={width > 650 ? 244 : 170}
                                    height={width > 650 ? 244 : 170}
                                    alt={item.title}
                                />
                            </article>
                        ))
                    ) : (
                        <>
                            <div className={styles.row}>
                                {DCards.slice(0, 2).map((item) => (
                                    <article key={item.id} className={styles.card}>
                                        <h4 className={styles.h4}>{item.title}</h4>
                                        <Image
                                            className={styles.img}
                                            src={item.img}
                                            width={width > 650 ? 244 : 170}
                                            height={width > 650 ? 244 : 170}
                                            alt={item.title}
                                        />
                                    </article>
                                ))}
                            </div>
                            <div className={styles.row}>
                                {DCards.slice(2, 4).map((item) => (
                                    <article key={item.id} className={styles.card}>
                                        <h4 className={styles.h4}>{item.title}</h4>
                                        <Image
                                            className={styles.img}
                                            src={item.img}
                                            width={width > 650 ? 244 : 170}
                                            height={width > 650 ? 244 : 170}
                                            alt={item.title}
                                        />
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
                </section>
            </div>
        </>
    );
};
