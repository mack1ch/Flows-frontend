'use client';

import { FlowsListHeader } from '@/shared/ui/pageHeaders-slice/flowsList';
import { FlowsTable } from '@/features/flowsTable-slice/flowsTable';
import { useState } from 'react';
import { FlowTableData } from '../data';
import { IFlowTableItems } from '@/shared/interface/flow';

export const MyFlowScreen = () => {
    const [sortArray, setSortArray] = useState<IFlowTableItems[]>(FlowTableData);
    console.log(sortArray);
    return (
        <>
            <FlowsListHeader
                onSort={setSortArray}
                searchItemsArray={sortArray}
                filterName="Статус заявки"
                title="Мои заявки"
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
