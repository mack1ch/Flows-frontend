import styles from './ui.module.scss';
import { FlowViewHead } from '@/widgets/flowView-slice/flowViewHead';
import { FlowDocumentView } from '@/features/flowView-slice/flowDocumentView';

export const PostViewScreen = ({ id }: { id: number }) => {
    return (
        <>
            <div className={styles.pageLayout}>
                <FlowViewHead postID={id} />
                <FlowDocumentView postID={id} />
            </div>
        </>
    );
};
