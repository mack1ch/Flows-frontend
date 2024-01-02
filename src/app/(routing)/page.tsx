'use client';
import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';
import { FlowsListHeader } from '@/shared/pageHeaders-slice/flowsList';

export default function Home() {
    return (
        <>
            <FlowsListHeader title="Мои заявки" />

            <FlowsTable />
        </>
    );
}
