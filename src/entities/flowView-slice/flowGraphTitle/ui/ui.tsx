import { IFlowGraphTitle } from '@/shared/interface/flowHistoryGraph';
import styles from './ui.module.scss';
import Link from 'next/link';
import { getStatusByType } from '../model';

export const FlowGraphTitle = ({
    flowGraphTitleProps,
}: {
    flowGraphTitleProps: IFlowGraphTitle;
}) => {
    const flowStatus = getStatusByType(flowGraphTitleProps.flowStatus).text;
    const flowColor = getStatusByType(flowGraphTitleProps.flowStatus).color;
    return (
        <>
            <h4 className={styles.graphTitle}>
                <Link style={{ color: flowColor }} className={styles.responsibleName} href="/">
                    {flowGraphTitleProps.responsibleName}
                    {flowGraphTitleProps.flowStatus === 'comment' ? '' : ','}
                </Link>{' '}
                {flowStatus}
            </h4>
        </>
    );
};
