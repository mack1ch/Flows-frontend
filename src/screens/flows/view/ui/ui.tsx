import styles from './ui.module.scss';
import { FlowViewHead } from '@/widgets/flowView-slice/flowViewHead';
import { FlowDocumentView } from '@/features/flowView-slice/flowDocumentView';

export const FlowViewScreen = ({ id }: { id: number }) => {
    
    return (
        <>
            <div className={styles.pageLayout}>
                <FlowViewHead flowID={id} />
                <FlowDocumentView flowID={id} />
            </div>
        </>
    );
};
