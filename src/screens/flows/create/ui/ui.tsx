import { PageTitle } from '@/shared/ui/pageHeaders-slice/title';
import styles from './ui.module.scss';
import { FlowCreateForm } from '@/widgets/flowCreate-slice/flowCreateForm';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/flowView';

export const CreateFlowScreen = () => {
    return (
        <>
            <div className={styles.layout}>
                <PageHeaderWithBackArray pageName="Новая заявка" />
                <FlowCreateForm />
            </div>
        </>
    );
};
