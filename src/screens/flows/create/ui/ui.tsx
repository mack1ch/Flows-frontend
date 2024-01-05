import { PageTitle } from '@/shared/ui/pageHeaders-slice/title';
import styles from './ui.module.scss';
import { FlowCreateForm } from '@/widgets/flowCreate-slice/flowCreateForm';

export const CreateFlowScreen = () => {
    return (
        <>
            <div className={styles.layout}>
                <PageTitle>Новая заявка</PageTitle>
                <FlowCreateForm />
            </div>
        </>
    );
};
