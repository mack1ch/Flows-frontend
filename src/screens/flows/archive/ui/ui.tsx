'use client';

import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';
import { IFlowTableItems } from '@/shared/interface/flow';
import { FlowsListHeader } from '@/shared/ui/pageHeaders-slice/flowsList';
import { useState } from 'react';
import { FlowTableData } from '../data';

export const ArchiveFlowScreen = () => {
    const [sortArray, setSortArray] = useState<IFlowTableItems[]>(FlowTableData);

    return (
        <>
            <FlowsListHeader
                onSort={setSortArray}
                searchItemsArray={sortArray}
                filterName="Статус заявки"
                title="Архив"
                onSearch={(searchText) => {
                    if (searchText) {
                        const filteredArray = sortArray.filter((item) =>
                            item.flowName.toLowerCase().includes(searchText.toLowerCase()),
                        );
                        setSortArray(filteredArray);
                    } else {
                        setSortArray(FlowTableData);
                    }
                }}
            />
            <FlowsTable sortArray={sortArray} />
        </>
    );
};
