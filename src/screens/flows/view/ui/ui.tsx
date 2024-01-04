import styles from './ui.module.scss';
import { FlowViewHead } from '@/widgets/flowView-slice/flowViewHead';
import { FlowDocumentView } from '@/features/flowView-slice/flowDocumentView';

export const FlowViewScreen = () => {
    return (
        <>
            <div className={styles.pageLayout}>
                <FlowViewHead />
                <FlowDocumentView />
            </div>
        </>
    );
};
