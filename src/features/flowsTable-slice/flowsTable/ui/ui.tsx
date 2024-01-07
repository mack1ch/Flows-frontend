import { FlowStatus } from '@/shared/ui/flowsTable-slice/flowStatus';
import styles from './ui.module.scss';
import { IFlowStatus } from '@/shared/interface/flowStatus';
import Link from 'next/link';
import { IFlowTableItems } from '@/shared/interface/flow';
import { capitalizeFirstLetter } from '@/shared/lib/parse/firstLetter';

export const FlowsTable = ({ sortArray }: { sortArray: IFlowTableItems[] }) => {
    return (
        <>
            <section className={styles.section}>
                <table
                    className={styles.table}
                    cellSpacing="5"
                    style={{ borderSpacing: '16px 32px' }}
                    width="100%">
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
                        {sortArray.map((item) => (
                            <>
                                <tr key={item.id} className={styles.flow}>
                                    <td>
                                        <Link
                                            title={capitalizeFirstLetter(item.flowName)}
                                            className={styles.flowTitle}
                                            href="/flows/view/1">
                                            {capitalizeFirstLetter(item.flowName)}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link className={styles.link} href={item.techTask}>
                                            {item.techTask}
                                        </Link>
                                    </td>
                                    <td>
                                        <FlowStatus props={item.flowStatus} />
                                    </td>
                                    <td className={styles.flowDate}>{item.date}</td>
                                </tr>
                                <td colSpan={4} style={{ borderBottom: '1px solid #ebebeb' }} />
                            </>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};
