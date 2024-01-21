
import styles from './ui.module.scss';
import { titleArray } from '../data';

export const FlowDocumentItemTitle = ({ dataKey }: { dataKey: string }) => {

    return (
        <>
            {/* <h6 key={dataKey} className={styles.title}>
                {dataKey}:
            </h6> */}
            <div className={styles.layout}>
                {titleArray.map((item, index) => (
                    <h6 key={index} className={styles.title}>
                        {item}
                    </h6>
                ))}
            </div>
        </>
    );

};
