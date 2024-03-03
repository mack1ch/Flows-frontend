import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';
import styles from './ui.module.scss';
import { FlowHistoryGraph } from '@/features/flowView-slice/flowHistoryGraph';
import { FlowManagement } from '@/features/flowView-slice/flowManagement';
import { IFlow, IFlowStatus } from '@/shared/interface/flow';
import { useEffect, useState } from 'react';
import { getFlowByID, getPostByID } from '../api';
import { IPost } from '@/shared/interface/post';

export const FlowViewHead = ({ flowID, postID }: { flowID?: number; postID?: number }) => {
    const [viewFlowData, setFlowData] = useState<IFlow>({} as IFlow);
    const [viewPostData, setPostData] = useState<IPost>({} as IPost);
    console.log(viewFlowData);
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
            <div className={styles.layout}>
                <div className={styles.section}>
                    <PageHeaderWithBackArray pageName={viewFlowData.name} />
                    <FlowHistoryGraph flowData={viewFlowData} />
                </div>
                <FlowManagement
                    flowID={flowID ? flowID : postID ? postID : 0}
                    flowStatus={viewFlowData.history?.at(-1)?.status}
                />
            </div>
        </>
    );
};
