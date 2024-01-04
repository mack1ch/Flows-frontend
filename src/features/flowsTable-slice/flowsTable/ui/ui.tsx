import { FlowStatus } from '@/shared/flowsTable-slice/flowStatus';
import styles from './ui.module.scss';
import { IFlowStatus } from '@/shared/interface/flowStatus';
import Link from 'next/link';
import { Divider } from 'antd';

export const FlowsTable = () => {
    const props: IFlowStatus = {
        statusCode: 'inProgress',
        responsible: 'Степанов Дмитрий Андреевич',
    };
    return (
        <>
            <section className={styles.section}>
                <table cellSpacing="5" style={{ borderSpacing: '16px 32px' }} width="100%">
                    <tbody>
                        <tr>
                            <td align="left" className={styles.tableHeader}>
                                Название
                            </td>
                            <td align="left" className={styles.tableHeader}>
                                Техническое задание
                            </td>
                            <td align="left" className={styles.tableHeader}>
                                Статус
                            </td>
                            <td align="left" className={styles.tableHeader}>
                                Дата
                            </td>
                        </tr>
                        <tr className={styles.flow}>
                            <td>
                                <Link
                                    title="Вставить название заявки"
                                    className={styles.flowTitle}
                                    href="/">
                                    Сокращение рутинной ручной работы
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.link} href="/">
                                    https://docs.google.com/presentation/https://docs.google.com/presentation/
                                </Link>
                            </td>
                            <td>
                                <FlowStatus props={props} />
                            </td>
                            <td className={styles.flowDate}>08.12.2007</td>
                        </tr>
                        <td colSpan={4} style={{ borderBottom: '1px solid #ebebeb' }} />
                        <tr className={styles.flow}>
                            <td>
                                <Link className={styles.flowTitle} href="/">
                                    Сокращение рутинной ручной работы
                                </Link>
                            </td>
                            <td>
                                <Link className={styles.link} href="/">
                                    https://docs.google.com/presentation/https://docs.google.com/presentation/
                                </Link>
                            </td>
                            <td>
                                <FlowStatus props={props} />
                            </td>
                            <td className={styles.flowDate}>08.12.2007</td>
                        </tr>
                        <td colSpan={4} style={{ borderBottom: '1px solid #ebebeb' }} />
                    </tbody>
                </table>
            </section>
        </>
    );
};
