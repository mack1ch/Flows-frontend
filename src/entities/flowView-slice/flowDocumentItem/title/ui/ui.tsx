
import styles from './ui.module.scss';

export const FlowDocumentItemTitle = ({ dataKey }: { dataKey: string }) => {

    return (
        <>
            <h6 key={dataKey} className={styles.title}>
                {dataKey}
            </h6>

        </>
    );

};
