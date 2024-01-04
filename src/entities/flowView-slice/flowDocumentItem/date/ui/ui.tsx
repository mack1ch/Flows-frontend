import Link from 'next/link';
import styles from './ui.module.scss';

export const FlowDocumentItemDate = ({
    date,
    isLink = false,
    href = '/',
}: {
    date: string;
    isLink?: boolean;
    href?: string;
}) => {
    return (
        <>
            <div className={styles.layout}>
                {isLink ? (
                    <Link className={styles.link} href={href}>
                        {date}
                    </Link>
                ) : (
                    <h6 className={styles.text}>{date}</h6>
                )}
            </div>
        </>
    );
};
