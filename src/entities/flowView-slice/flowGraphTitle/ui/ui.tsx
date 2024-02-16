import { IFlowGraphTitle } from '@/shared/interface/flowHistoryGraph';
import styles from './ui.module.scss';
import Link from 'next/link';
import { getStatusByType } from '../model';
import { IUser } from '@/shared/interface/user';
import { IFlowStatus, TFlowStatusType } from '@/shared/interface/flow';
import { getUserFIO } from '@/shared/lib/parse/user';

export const FlowGraphTitle = ({
    flowStatus,
    responsibleUser,
}: {
    responsibleUser: IUser | undefined;
    flowStatus: IFlowStatus | undefined;
}) => {
    const responsibleName = getUserFIO(responsibleUser ? responsibleUser : ({} as IUser));

    const color = getStatusByType(
        flowStatus?.statusType ? flowStatus.statusType : 'proposalDone',
    ).color;
    return (
        <>
            <h4 className={styles.graphTitle}>
                <Link style={{ color: color }} className={styles.responsibleName} href="/">
                    {responsibleName}
                    {flowStatus?.statusType === 'proposalNeedRevision' ? '' : ','}
                </Link>{' '}
                {flowStatus?.name.toLocaleLowerCase()}
            </h4>
        </>
    );
};
