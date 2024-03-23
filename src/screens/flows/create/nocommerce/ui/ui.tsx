import styles from './ui.module.scss';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';
import { FlowNoCommerceForm } from '@/widgets/flowCreate-slice/flowNoCommerceForm';

export const CreateFlowSmallScreen = () => {
    return (
        <>
            <div className={styles.layout}>
                <PageHeaderWithBackArray pageName="Новая заявка" />
                <FlowNoCommerceForm />
            </div>
        </>
    );
};
