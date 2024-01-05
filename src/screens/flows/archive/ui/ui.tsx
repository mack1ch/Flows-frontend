import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';
import { FlowsListHeader } from '@/shared/ui/pageHeaders-slice/flowsList';

export const ArchiveFlowScreen = () => {
    return (
        <>
            <FlowsListHeader filterName="Статус заявки" title="Архив" />
            <FlowsTable />
        </>
    );
};
