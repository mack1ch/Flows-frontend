import { titleArray } from '../date';
import styles from './ui.module.scss';

export const FlowDocumentItemTitle = () => {
    return (
        <>
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
