'use client';

import { FlowsListHeader } from '@/shared/ui/pageHeaders-slice/flowsList';
import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';
import { useEffect, useState } from 'react';
import { IFlow, IFlowStatus } from '@/shared/interface/flow';
import { getFlowsByStatusID, getFlowsStatuses } from '../api';

export const MyFlowScreen = () => {
    const [flows, setFlows] = useState<IFlow[]>([] as IFlow[]);
    const [flowStatuses, setFlowStatuses] = useState<IFlowStatus[]>([] as IFlowStatus[]);
    const [flowStatusesChoise, setFlowStatusChoise] = useState<string>('');
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
            const fetchFlows: IFlow[] | Error = await getFlowsByStatusID(flowStatusesChoise);
            if (fetchFlows instanceof Error) return;
            else {
                setFlows(fetchFlows);
            }
        };
        GetFlows();
    }, [flowStatusesChoise]);
    useEffect(() => {
        setFilteredFlows(flows);
    }, [flows]);

    return (
        <>
            <FlowsListHeader
                setFlowStatusChoise={setFlowStatusChoise}
                filterItemsArray={flowStatuses}
                onSort={setFilteredFlows}
                searchItemsArray={filteredFlows}
                filterName="Статус заявки"
                title="Мои заявки"
                onSearch={(searchText) => {
                    if (searchText) {
                        const filteredArray = flows.filter((item) =>
                            item.name.toLowerCase().includes(searchText.toLowerCase()),
                        );
                        setFilteredFlows(filteredArray);
                    } else {
                        setFilteredFlows(flows);
                    }
                }}
            />
            <FlowsTable flows={filteredFlows} />
        </>
    );
};
