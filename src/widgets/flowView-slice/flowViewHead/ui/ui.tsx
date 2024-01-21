import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';
import styles from './ui.module.scss';
import { FlowHistoryGraph } from '@/features/flowView-slice/flowHistoryGraph';
import { FlowManagement } from '@/features/flowView-slice/flowManagement';
import { IFlow, IFlowStatus } from '@/shared/interface/flow';
import { useEffect, useState } from 'react';
import { getFlowByID } from '../api';


export const FlowViewHead = ({ flowID }: { flowID: number }) => {
    const [viewFlowData, setFlowData] = useState<IFlow>({} as IFlow)
    useEffect(() => {
        const GetFlowByID = async () => {
            const fetchFlowByID: IFlow | Error = await getFlowByID(flowID);
            if (fetchFlowByID instanceof Error) return;
            else {
                setFlowData(fetchFlowByID)
            }
        };

        GetFlowByID();
    }, [])
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.section}>
                    <PageHeaderWithBackArray pageName={viewFlowData.name} />
                    <FlowHistoryGraph flowData={viewFlowData} />
                </div>
                <FlowManagement flowStatus={viewFlowData.histories?.at(-1)?.status} />
            </div>
        </>
    );
};
