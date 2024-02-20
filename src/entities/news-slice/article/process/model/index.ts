import { TFlowStatusType } from '@/shared/interface/flow';

interface IProcessValue {
    currentValue: number;
    maxValue: number;
}

export function getProcessNumberValue(status?: TFlowStatusType): IProcessValue {
    let currentValue: number | null = null;
    let maxValue: number | null = null;
    switch (status) {
        case 'proposalCreated':
            currentValue = 1;
            maxValue = 5;
            break;
        case 'proposalInApprove':
            currentValue = 2;
            maxValue = 5;
            break;
        case 'proposalApproved':
            currentValue = 3;
            maxValue = 5;
            break;
        case 'proposalInWork':
            currentValue = 4;
            maxValue = 5;
        case 'proposalDone':
            currentValue = 5;
            maxValue = 5;
            break;
        case 'proposalNeedRevision':
            currentValue = 2;
            maxValue = 5;

        default:
            currentValue = 0;
            maxValue = 5;
            break;
    }

    return { currentValue, maxValue };
}
