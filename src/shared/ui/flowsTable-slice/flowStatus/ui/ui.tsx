
import styles from './ui.module.scss';
import { getStatusByType } from '../model';
import { IFlowStatus, TFlowStatusType } from '@/shared/interface/flow';
import { IUser } from '@/shared/interface/user';

export const FlowStatus = ({ status, responsible }: { status: IFlowStatus | undefined; responsible: IUser | undefined }) => {
    const statusTitle = getStatusByType(status?.status_type || 'loading').title || 'Загрузка';
    const statusColor = getStatusByType(status?.status_type || 'loading').color || 'Загрузка';
    const statusText = getStatusByType(status?.status_type || 'loading').text || 'Загрузка';

    return (
        <>
            <div className={styles.layout}>
                <span style={{ background: statusColor }} className={styles.circle} />
                <div className={styles.info}>
                    <h4 className={styles.title}>{statusTitle}</h4>
                    {statusText && statusText?.length > 0 && status?.status_type !== 'proposal_in_work' && (
                        <p title={typeof responsible === 'undefined' ? 'Загрузка...' : (responsible.firstname + ' ' + responsible?.lastname)} className={styles.text}>
                            {statusText}:   {typeof responsible === 'undefined' ? 'Загрузка...' : (responsible.firstname + ' ' + responsible?.lastname)}
                        </p>
                    )}
                    {statusText && statusText?.length > 0 && status?.status_type === 'proposal_in_work' && (
                        <p title={typeof responsible === 'undefined' ? 'Загрузка...' : (responsible.firstname + ' ' + responsible?.lastname)} className={styles.text}>
                            <span style={{ color: '#73AE62' }}> {statusText}</span>:{' '}
                            {typeof responsible === 'undefined' ? 'Загрузка...' : (responsible.firstname + ' ' + responsible?.lastname)}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};
