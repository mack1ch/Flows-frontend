import { FlowsListHeader } from '@/shared/pageHeaders-slice/flowsList';
import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';

export const MyFlowScreen = () => {
    return (
        <>
            <FlowsListHeader filterName='Статус заявки' title="Мои заявки" />
            <FlowsTable />
        </>
    );
};