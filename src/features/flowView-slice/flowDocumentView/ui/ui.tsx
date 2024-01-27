import { Divider } from 'antd';
import styles from './ui.module.scss';
import { FlowDocumentItemTitle } from '@/entities/flowView-slice/flowDocumentItem/title';
import { useEffect, useState } from 'react';
import { IFlow } from '@/shared/interface/flow';
import { getFlowByID, getPostByID } from '../api';
import { IPost } from '@/shared/interface/post';

export const FlowDocumentView = ({ flowID, postID }: { flowID?: number; postID?: number }) => {
    const [viewFlowData, setFlowData] = useState<IFlow>({} as IFlow)
    const [viewPostData, setPostData] = useState<IPost>({} as IPost);
    useEffect(() => {
        const GetFlowByID = async () => {
            const fetchFlowByID: IFlow | Error = await getFlowByID(flowID);
            if (fetchFlowByID instanceof Error) return;
            else {
                setFlowData(fetchFlowByID)
            }
        };
        const GetPostByID = async () => {
            const fetchPost: IPost | Error = await getPostByID(flowID);
            if (fetchPost instanceof Error) return;
            else {
                setPostData(fetchPost)
            }
        };
        if (postID) {
            GetPostByID()
        } else if (flowID) {
            GetFlowByID();
        }
    }, [])

    return (
        <>
            <section className={styles.layout}>
                <div className={styles.document}>
                    <h2 className={styles.heading}>{viewFlowData.name}</h2>
                    <Divider />
                    <div className={styles.date}>
                        <div className={styles.items}>
                            {viewFlowData.content ? Object.keys(viewFlowData.content).map((key) => (
                                <FlowDocumentItemTitle key={key} dataKey={key} />
                            )) : viewPostData?.proposal?.content && Object.keys(viewPostData?.proposal?.content).map((key) => (
                                <FlowDocumentItemTitle key={key} dataKey={key} />))}
                        </div>
                        <div className={styles.items}>
                            {viewFlowData.content ? Object.keys(viewFlowData.content).map((key: string) => (
                                <div key={key} className={styles.contentItem}>
                                    {// @ts-ignore
                                        viewFlowData.content[key]
                                    }
                                </div>
                            )) : viewPostData?.proposal?.content && Object.keys(viewPostData?.proposal?.content).map((key: string) => (
                                <div key={key} className={styles.contentItem}>
                                    {// @ts-ignore
                                        viewFlowData.content[key]
                                    }
                                </div>))}

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
