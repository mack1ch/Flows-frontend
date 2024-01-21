'use client'
import { FlowStatus } from '@/shared/ui/flowsTable-slice/flowStatus';
import styles from './ui.module.scss';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/shared/lib/parse/firstLetter';
import { IFlow } from '@/shared/interface/flow';
import { parseDateToDotFormat } from '@/shared/lib/parse/date';

export const FlowsTable = ({ flows }: { flows: IFlow[] }) => {

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
                        {flows?.map((item) => (
                            <>
                                <tr key={item.id} className={styles.flow}>
                                    <td>
                                        <Link
                                            title={capitalizeFirstLetter(item.name)}
                                            className={styles.flowTitle}
                                            href={`/flows/view/${item.id}`} >
                                            {capitalizeFirstLetter(item.name)}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link className={styles.link} href={item.document}>
                                            {item.document}
                                        </Link>
                                    </td>
                                    <td>
                                        <FlowStatus responsible={item?.histories?.at(-1)?.by_user} status={item?.histories?.at(-1)?.status || undefined} />
                                    </td>
                                    <td className={styles.flowDate}>{parseDateToDotFormat(item.created_date)}</td>
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
