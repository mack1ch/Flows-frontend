import { FlowViewHeader } from '@/shared/pageHeaders-slice/flowView';
import styles from './ui.module.scss';
import { FlowHistoryGraph } from '@/features/flowView-slice/flowHistoryGraph';
import { FlowManagement } from '@/features/flowView-slice/flowManagement';
import { IFlowStatus } from '@/shared/interface/flowStatus';

export const FlowViewHead = () => {
    const props: IFlowStatus = {
        statusCode: 'clarification',
        responsible: 'Степанов Дмитрий Андреевич',
    };
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.section}>
                    <FlowViewHeader flowName="Сокращение рутинной ручной работы" />
                    <FlowHistoryGraph />
                </div>
                <FlowManagement props={props} />
            </div>
        </>
    );
};
