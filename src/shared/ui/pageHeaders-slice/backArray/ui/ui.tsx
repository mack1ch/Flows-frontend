'use client';
import { useRouter } from 'next/navigation';
import styles from './ui.module.scss';
import Image from 'next/image';
import ArrowLeft from '../../../../../../public/icons/arrow-left-darkBlue.svg';
import { CSSProperties, ReactNode } from 'react';
export const PageHeaderWithBackArray = ({
    pageName,
    style,
}: {
    pageName: ReactNode | string;
    style?: CSSProperties;
}) => {
    const router = useRouter();
    return (
        <>
            <section style={{ ...style }} className={styles.layout}>
                <Image
                    style={{ cursor: 'pointer', marginTop: '4px' }}
                    onClick={() => router.back()}
                    src={ArrowLeft}
                    width={24}
                    height={24}
                    alt="Вернуться назад"
                />
                <h1 className={styles.pageTitle}>{pageName}</h1>
            </section>
        </>
    );
};
