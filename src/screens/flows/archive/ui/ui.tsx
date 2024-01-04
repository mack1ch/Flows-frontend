import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';
import { FlowsListHeader } from '@/shared/pageHeaders-slice/flowsList';

export const ArchiveFlowScreen = () => {
    return (
        <>
            <FlowsListHeader filterName="Статус заявки" title="Архив" />
            <FlowsTable />
        </>
    );
};
