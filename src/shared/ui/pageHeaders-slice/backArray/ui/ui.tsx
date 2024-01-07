'use client';
import { useRouter } from 'next/navigation';
import styles from './ui.module.scss';
import Image from 'next/image';
import ArrowLeft from '../../../../../../public/icons/arrow-left-darkBlue.svg';
import { CSSProperties } from 'react';
export const PageHeaderWithBackArray = ({
    pageName,
    style,
}: {
    pageName: string;
    style?: CSSProperties;
}) => {
    const router = useRouter();
    return (
        <>
            <section style={{ ...style }} className={styles.layout}>
                <Image
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.back()}
                    src={ArrowLeft}
                    width={26}
                    height={26}
                    alt="Вернуться назад"
                />
                <h1 className={styles.pageTitle}>{pageName}</h1>
            </section>
        </>
    );
};
