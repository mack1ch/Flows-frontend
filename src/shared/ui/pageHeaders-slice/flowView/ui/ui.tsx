'use client';
import { useRouter } from 'next/navigation';
import styles from './ui.module.scss';
import Image from 'next/image';
import ArrowLeft from '../../../../../../public/icons/arrow-left-darkBlue.svg';
export const FlowViewHeader = ({ flowName }: { flowName: string }) => {
    const router = useRouter();
    return (
        <>
            <section className={styles.layout}>
                <Image
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.back()}
                    src={ArrowLeft}
                    width={28}
                    height={28}
                    alt="Вернуться назад"
                />
                <h1 className={styles.pageTitle}>{flowName}</h1>
            </section>
        </>
    );
};
