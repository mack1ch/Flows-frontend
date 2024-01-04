import { Divider } from 'antd';
import styles from './ui.module.scss';
import { FlowDocumentItemDate } from '@/entities/flowView-slice/flowDocumentItem/date';
import { FlowDocumentItemTitle } from '@/entities/flowView-slice/flowDocumentItem/title';
import { dateItems } from '../date';

export const FlowDocumentView = () => {
    return (
        <>
            <section className={styles.layout}>
                <div className={styles.document}>
                    <h2 className={styles.heading}>Сокращение рутинной ручной работы</h2>
                    <Divider />
                    <div className={styles.date}>
                        <FlowDocumentItemTitle />
                        <div className={styles.items}>
                            {dateItems.map((item, index) => (
                                <FlowDocumentItemDate
                                    key={index}
                                    date={item.date}
                                    href={item.href}
                                    isLink={item.isLink}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
