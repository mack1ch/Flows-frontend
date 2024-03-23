import styles from './ui.module.scss';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';
import { FlowCommerceForm } from '@/widgets/flowCreate-slice/flowCommerceForm';

export const CreateCommerceForm = () => {
    return (
        <>
            <div className={styles.layout}>
                <PageHeaderWithBackArray pageName="Новая заявка" />
                <FlowCommerceForm />
            </div>
        </>
    );
};
