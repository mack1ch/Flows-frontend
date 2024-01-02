import { IFlowStatus } from '@/shared/interface/flowStatus';
import styles from './ui.module.scss';
import { getStatusByType } from '../model';

export const FlowStatus = ({ props }: { props: IFlowStatus }) => {
    const statusTitle = getStatusByType(props.statusCode).title;
    const statusColor = getStatusByType(props.statusCode).color;
    const statusText = getStatusByType(props.statusCode).text;
    return (
        <>
            <div className={styles.layout}>
                <span style={{ background: statusColor }} className={styles.circle} />
                <div className={styles.info}>
                    <h4 className={styles.title}>{statusTitle}</h4>
                    {statusText && statusText?.length > 0 && (
                        <p className={styles.text}>
                            {statusText}: {props.responsible}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};
