import styles from './ui.module.scss';
import { getStatusByType } from '../model';
import { IFlow, IFlowStatus, TFlowStatusType } from '@/shared/interface/flow';
import { IUser } from '@/shared/interface/user';

export const FlowStatus = ({
    status,
    responsible,
    flow,
}: {
    status: IFlowStatus | undefined;
    responsible: IUser | undefined;
    flow?: IFlow;
}) => {
    const statusTitle = getStatusByType(status?.statusType || 'loading').title || 'Загрузка';
    const statusColor = getStatusByType(status?.statusType || 'loading').color || 'Загрузка';
    const statusText = getStatusByType(status?.statusType || 'loading').text || 'Загрузка';

    return (
        <>
            <div className={styles.layout}>
                <span style={{ background: statusColor }} className={styles.circle} />
                <div className={styles.info}>
                    <h4 className={styles.title}>{statusTitle}</h4>
                    {statusText &&
                        statusText?.length > 0 &&
                        status?.statusType !== 'proposalInWork' && (
                            <p
                                title={
                                    typeof responsible === 'undefined'
                                        ? 'Загрузка...'
                                        : responsible.firstname + ' ' + responsible?.surname
                                }
                                className={styles.text}>
                                {statusText}:{' '}
                                {flow?.responsibleDepartment
                                    ? flow.responsibleDepartment.name
                                    : typeof responsible === 'undefined'
                                    ? 'Загрузка...'
                                    : responsible.firstname + ' ' + responsible?.surname}
                            </p>
                        )}
                    {statusText &&
                        statusText?.length > 0 &&
                        status?.statusType === 'proposalInWork' && (
                            <p
                                title={
                                    typeof responsible === 'undefined'
                                        ? 'Загрузка...'
                                        : responsible.firstname + ' ' + responsible?.surname
                                }
                                className={styles.text}>
                                <span style={{ color: '#73AE62' }}> {statusText}</span>:{' '}
                                {flow?.responsibleDepartment
                                    ? flow.responsibleDepartment.name
                                    : typeof responsible === 'undefined'
                                    ? 'Загрузка...'
                                    : responsible.firstname + ' ' + responsible?.surname}
                            </p>
                        )}
                </div>
            </div>
        </>
    );
};
