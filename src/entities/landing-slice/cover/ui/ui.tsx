'use client';

import styles from './ui.module.scss';
import InverseWhite from '../../../../../public/assets/inverseFlowWhite.svg';
import CoverUnder from '../../../../../public/assets/cover_flows_under.png';
import CoverForward from '../../../../../public/assets/cover_flows_forward.png';
import CoverMain from '../../../../../public/assets/cover_main_flow.png';
import Image from 'next/image';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
export const Cover = () => {
    const { width, height } = useWindowSize();

    return (
        <>
            <div className={styles.layout}>
                <section className={styles.cover}>
                    <dt className={styles.info}>
                        <span className={styles.column}>
                            <Image
                                src={InverseWhite}
                                width={width < 1000 ? 244 : 358}
                                height={width < 1000 ? 26 : 40}
                                alt="Inverse.Заявки"
                            />
                            <p className={styles.p}>
                                Создание и управление заявками внутри бизнеса
                            </p>
                        </span>
                        <button className={styles.button}>Попробовать</button>
                    </dt>
                    <picture className={styles.picture}>
                        <span className={styles.position}>
                            <Image
                                className={styles.bgFlow_1}
                                src={CoverForward}
                                width={759}
                                alt="Cover"
                            />
                            <Image
                                className={styles.bgFlow_2}
                                src={CoverUnder}
                                width={759}
                                alt="Cover"
                            />
                        </span>
                        <Image
                            className={styles.mainFlow}
                            src={CoverMain}
                            width={482}
                            alt="Cover"
                        />
                    </picture>
                </section>
            </div>
        </>
    );
};
