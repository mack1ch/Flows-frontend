import { TFlowStatusType } from "./flow";

export interface IFlowHistoryGraph {
    className?: string;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    status?: 'wait' | 'process' | 'finish' | 'error';
    disabled?: boolean;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    style?: React.CSSProperties;
}

export interface IFlowGraphTitle {
    responsibleName: string;
    flowStatus: TFlowStatusType;
}
