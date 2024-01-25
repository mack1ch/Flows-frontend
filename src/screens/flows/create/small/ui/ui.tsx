
import styles from './ui.module.scss';
import { FlowCreateForm } from '@/widgets/flowCreate-slice/flowCreateForm';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';

export const CreateFlowSmallScreen = () => {
    return (
        <>
            <div className={styles.layout}>
                <PageHeaderWithBackArray pageName="Новая заявка" />
                <FlowCreateForm  />
            </div>
        </>
    );
};
