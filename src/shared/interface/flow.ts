import { IFlowStatus } from './flowStatus';

export interface IFlowTableItems {
    id: number;
    flowName: string;
    techTask: string;
    flowStatus: IFlowStatus;
    date: string;
}
