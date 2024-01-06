import { IFlowTableItems } from '@/shared/interface/flow';
import { MenuProps } from 'antd';

export const mapFlowTableItemsToMenuArray = (
    flowTableItems: IFlowTableItems[],
): MenuProps['items'] => {
    return flowTableItems.map((item) => ({
        label: item.flowName,
        key: item.id.toString(),
    }));
};

export const sortFlowTableItems = (
    flowTableItems: IFlowTableItems[],
    sortBy: keyof IFlowTableItems,
) => {
    return flowTableItems.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
            return -1;
        } else if (a[sortBy] > b[sortBy]) {
            return 1;
        } else {
            return 0;
        }
    });
};
