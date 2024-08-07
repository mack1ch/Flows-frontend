'use client';
import { FlowStatus } from '@/shared/ui/flowsTable-slice/flowStatus';
import styles from './ui.module.scss';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/shared/lib/parse/firstLetter';
import { IFlow } from '@/shared/interface/flow';
import { parseDateToDotFormat } from '@/shared/lib/parse/date';
import { Button, ConfigProvider, ThemeConfig } from 'antd';
import { useEffect, useState } from 'react';
import { ApproveModal } from '../approveModal';
import React from 'react';
import { isURL } from '@/shared/lib/parse/link';
import { LikesAndViews } from '@/shared/ui/news-slice/likesAndViews';

export const FlowsTable = ({
    flows,
    isApproved = false,
}: {
    flows: IFlow[];
    isApproved?: boolean;
}) => {
    const [modalStates, setModalStates] = useState<{ [key: string]: boolean }>({});
    const [renderFlows, setRenderFlows] = useState<IFlow[] | null>(flows);
    useEffect(() => {
        setRenderFlows(flows);
    }, [flows]);

    const toggleModal = (itemId: string | number) => {
        setModalStates((prevStates) => ({
            ...prevStates,
            [String(itemId)]: !prevStates[String(itemId)],
        }));
    };

    return (
        <>
            <ConfigProvider theme={flowTableTheme}>
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
                                    Материалы
                                </td>
                                <td align="left" className={styles.tableHeader}>
                                    Статус
                                </td>
                                <td align="left" className={styles.tableHeader}>
                                    {isApproved ? undefined : 'Реакции'}
                                </td>
                            </tr>
                            {renderFlows?.map((item) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <ApproveModal
                                            key={`modal-${item.id}`}
                                            postData={item}
                                            modalOpen={modalStates[item.id]}
                                            setModalOpen={() => toggleModal(item.id)}
                                        />
                                        <tr key={`row-${item.id}`} className={styles.flow}>
                                            <td>
                                                <Link
                                                    title={capitalizeFirstLetter(item.name)}
                                                    className={styles.flowTitle}
                                                    href={`/flows/view/${item.id}`}>
                                                    {capitalizeFirstLetter(item.name)}
                                                </Link>
                                            </td>
                                            <td>
                                                {isURL(item.documentLink) ? (
                                                    <Link
                                                        className={styles.link}
                                                        href={item.documentLink}>
                                                        {item.documentLink}
                                                    </Link>
                                                ) : (
                                                    <p className={styles.material}>
                                                        Материалов нет
                                                    </p>
                                                )}
                                            </td>
                                            <td>
                                                <FlowStatus
                                                    flow={item}
                                                    responsible={item?.history?.at(-1)?.user}
                                                    status={
                                                        item?.history?.at(-1)?.status || undefined
                                                    }
                                                />
                                            </td>
                                            {!isApproved ? (
                                                <td className={styles.flowDate}>
                                                    <LikesAndViews flow={item} />
                                                </td>
                                            ) : (
                                                <td className={styles.flowDate}>
                                                    {parseDateToDotFormat(item.createdAt)}
                                                </td>
                                            )}
                                        </tr>
                                        <tr
                                            key={`separator-${item.id}`}
                                            style={{ borderBottom: '1px solid #ebebeb' }}
                                        />
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </ConfigProvider>
        </>
    );
};

const flowTableTheme: ThemeConfig = {
    components: {
        Button: {
            defaultBg: '#449429',
            colorText: '#fff',
            colorBorder: '#449429F',
            colorPrimaryHover: '#ebebeb',
            colorPrimaryActive: '#ebebeb',
        },
    },
};
