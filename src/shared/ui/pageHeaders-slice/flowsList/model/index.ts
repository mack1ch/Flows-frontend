
import { IFlow, IFlowStatus } from '@/shared/interface/flow';
import { MenuProps } from 'antd';

export const mapFlowTableItemsToMenuArray = (
    flowTableItems: IFlowStatus[],
): MenuProps['items'] => {
    if (!flowTableItems || flowTableItems.length === 0) {
        return [{ label: 'Загрузка', key: 1 }];
    }
    return flowTableItems?.map((item) => ({
        label: item.name.toString(),
        key: item.id.toString(),
    }));
};

export const sortFlowTableItems = (
    flowTableItems: IFlow[],
    sortBy: keyof IFlow,
) => {
    if (!flowTableItems) return flowTableItems;
    return flowTableItems.sort((a, b) => {
        const aSortValue = a[sortBy];
        const bSortValue = b[sortBy];

        if (aSortValue != null && bSortValue != null) {
            if (aSortValue < bSortValue) {
                return -1;
            } else if (aSortValue > bSortValue) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    });
};
