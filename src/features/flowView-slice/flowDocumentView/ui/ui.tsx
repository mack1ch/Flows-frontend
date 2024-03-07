import {Divider} from 'antd';
import styles from './ui.module.scss';
import {FlowDocumentItemTitle} from '@/entities/flowView-slice/flowDocumentItem/title';
import {useEffect, useState} from 'react';
import {IFlow} from '@/shared/interface/flow';
import {getFlowByID, getPostByID} from '../api';
import {IPost} from '@/shared/interface/post';
import {headersMapping} from '../model';
import {getUserFIO, getUserTelegram} from '@/shared/lib/parse/user';
import Link from 'next/link';
import {useWindowSize} from "@/shared/hooks/useWindowSize";

export const FlowDocumentView = ({flowID, postID}: { flowID?: number; postID?: number }) => {
    const [viewFlowData, setFlowData] = useState<IFlow>({} as IFlow);
    const {width, height} = useWindowSize();
    const [viewPostData, setPostData] = useState<IPost>({} as IPost);
    useEffect(() => {
        const GetFlowByID = async () => {
            const fetchFlowByID: IFlow | Error = await getFlowByID(flowID);
            if (fetchFlowByID instanceof Error) return;
            else {
                setFlowData(fetchFlowByID);
            }
        };
        const GetPostByID = async () => {
            const fetchPost: IPost | Error = await getPostByID(flowID);
            if (fetchPost instanceof Error) return;
            else {
                setPostData(fetchPost);
            }
        };
        if (postID) {
            GetPostByID();
        } else if (flowID) {
            GetFlowByID();
        }
    }, []);

    return (
        <>
            <section className={styles.layout}>
                <div className={styles.document}>
                    <h2 className={styles.heading}>{viewFlowData.name}</h2>
                    <Divider/>
                    <div className={styles.date}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '8px',
                            }}>
                            <div
                                className={styles.contentTitle}
                                style={{flex: width > 570 ? '0 0 25%' : '0 0 fit-content', textAlign: 'left'}}>
                                ФИО создателя:
                            </div>
                            <div
                                className={styles.contentItem}
                                style={{flex: '1', textAlign: 'left'}}>
                                {viewFlowData.author && getUserFIO(viewFlowData.author)}
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '8px',
                            }}>
                            <div
                                className={styles.contentTitle}
                                style={{flex: width > 570 ? '0 0 25%' : '0 0 fit-content', textAlign: 'left'}}>
                                ID в Telegram:
                            </div>
                            <Link
                                className={styles.link}
                                href={
                                    (viewFlowData.author &&
                                        `${
                                            'https://t.me/' +
                                            getUserTelegram(viewFlowData.author.telegram)
                                        }`) ||
                                    '/flow/my'
                                }
                                style={{flex: '1', textAlign: 'left'}}>
                                {viewFlowData.author && viewFlowData.author.telegram}
                            </Link>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '8px',
                            }}>
                            <div
                                className={styles.contentTitle}
                                style={{flex: width > 570 ? '0 0 25%' : '0 0 fit-content', textAlign: 'left'}}>
                                Отдел:
                            </div>
                            <div
                                className={styles.contentItem}
                                style={{flex: '1', textAlign: 'left'}}>
                                {(viewFlowData.author && viewFlowData.author?.job?.name) ||
                                    'Не найден'}
                            </div>
                        </div>
                        {viewFlowData.content &&
                            Object.entries(viewFlowData?.content).map(([key, value]) => {
                                if (!key || typeof value !== 'string') return null;
                                const header = headersMapping[key] || key;
                                return (
                                    <div
                                        key={key}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            gap: '8px',
                                        }}>
                                        <div
                                            className={styles.contentTitle}
                                            style={{
                                                flex: width > 570 ? '0 0 25%' : '0 0 fit-content',
                                                textAlign: 'left'
                                            }}>
                                            {header}:
                                        </div>
                                        <div
                                            className={styles.contentItem}
                                            style={{flex: '1', textAlign: 'left'}}>
                                            {value}
                                        </div>
                                    </div>
                                );
                            })}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '8px',
                            }}>
                            <div
                                className={styles.contentTitle}
                                style={{flex: width > 570 ? '0 0 25%' : '0 0 fit-content', textAlign: 'left'}}>
                                Техническое задание:
                            </div>
                            <Link
                                className={styles.link}
                                href={
                                    (viewFlowData.documentLink && viewFlowData.documentLink) ||
                                    '/flows/my/'
                                }
                                style={{flex: '1', textAlign: 'left'}}>
                                {(viewFlowData.documentLink && viewFlowData.documentLink) ||
                                    'Не найдено'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
