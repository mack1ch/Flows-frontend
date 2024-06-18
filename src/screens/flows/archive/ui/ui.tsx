'use client';

import { FlowsListHeader } from '@/shared/ui/pageHeaders-slice/flowsList';
import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';
import { useEffect, useState } from 'react';
import { IFlow, IFlowStatus } from '@/shared/interface/flow';
import { getFlowsByStatusID, getFlowsStatuses } from '../api';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';
import { PageTitle } from '@/shared/ui/pageHeaders-slice/title';

export const ArchiveFlowScreen = () => {
    const [flows, setFlows] = useState<IFlow[]>([] as IFlow[]);
    const [flowStatuses, setFlowStatuses] = useState<IFlowStatus[]>([] as IFlowStatus[]);
    const [flowStatusesChoose, setFlowStatusChoise] = useState<string[]>([]);
    const [filteredFlows, setFilteredFlows] = useState<IFlow[]>([]);
    useEffect(() => {
        const GetFlowStatuses = async () => {
            const fetchStatuses: IFlowStatus[] | Error = await getFlowsStatuses();
            if (fetchStatuses instanceof Error) return;
            else {
                setFlowStatuses(fetchStatuses);
            }
        };

        GetFlowStatuses();
    }, []);

    useEffect(() => {
        const GetFlows = async () => {
            const fetchFlows: IFlow[] | Error = await getFlowsByStatusID(
                flowStatusesChoose,
                flowStatuses,
            );
            if (fetchFlows instanceof Error) return;
            else {
                setFlows(fetchFlows);
            }
        };
        if (flowStatuses) {
            GetFlows();
        }
    }, [flowStatusesChoose]);
    useEffect(() => {
        setFilteredFlows(flows);
    }, [flows]);

    return (
        <>
            <PageTitle>Архив</PageTitle>
            <FlowsTable flows={filteredFlows} />
        </>
    );
};
