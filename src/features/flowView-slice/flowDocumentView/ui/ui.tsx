import { Divider } from 'antd';
import styles from './ui.module.scss';
import { FlowDocumentItemDate } from '@/entities/flowView-slice/flowDocumentItem/date';
import { FlowDocumentItemTitle } from '@/entities/flowView-slice/flowDocumentItem/title';

import { useEffect, useState } from 'react';
import { IFlow } from '@/shared/interface/flow';
import { getFlowByID } from '../api';

export const FlowDocumentView = ({ flowID }: { flowID: number; }) => {
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
            <section className={styles.layout}>
                <div className={styles.document}>
                    <h2 className={styles.heading}>{viewFlowData.name}</h2>
                    <Divider />
                    <div className={styles.date}>
                        <div className={styles.items}>
                            {viewFlowData.content && Object.keys(viewFlowData.content).map((key) => (
                                <FlowDocumentItemTitle key={key} dataKey={key} />
                            ))}
                        </div>
                        <div className={styles.items}>
                            {viewFlowData.content && Object.keys(viewFlowData.content).map((key) => (
                                <div key={key} className={styles.contentItem}>
                                    {viewFlowData.content[Number(key)]}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
