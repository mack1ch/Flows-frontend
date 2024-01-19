import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';
import styles from './ui.module.scss';
import { FlowHistoryGraph } from '@/features/flowView-slice/flowHistoryGraph';
import { FlowManagement } from '@/features/flowView-slice/flowManagement';
import { IFlowStatus } from '@/shared/interface/flow';


export const FlowViewHead = () => {
    const props: IFlowStatus = {
        status_type: 'proposal_in_approve',
        name: 'На согласовании',
        id: 1,
    };
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.section}>
                    <PageHeaderWithBackArray pageName="Сокращение рутинной ручной работы" />
                    <FlowHistoryGraph />
                </div>
                <FlowManagement props={props} />
            </div>
        </>
    );
};
