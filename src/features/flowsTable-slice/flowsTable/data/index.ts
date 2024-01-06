import { IFlowStatus } from '@/shared/interface/flowStatus';

export interface IFlowTableItems {
    id: number;
    flowName: string;
    techTask: string;
    flowStatus: IFlowStatus;
    date: string;
}

const props: IFlowStatus = {
    statusCode: 'inProgress',
    responsible: 'Степанов Дмитрий Андреевич',
};

export const FlowTableData: IFlowTableItems[] = [
    {
        id: 0,
        flowName: 'Сокращение рутинной ручной работы',
        techTask: 'https://docs.google.com/presentation/',
        flowStatus: props,
        date: '06.02.2023',
    },
    {
        id: 1,
        flowName: 'Оптимизировать работу менеджера',
        techTask: 'https://docs.google.com/presentation/',
        flowStatus: props,
        date: '06.02.2023',
    },
    {
        id: 2,
        flowName: 'Контроль за поставщиками (передают ли сведения)',
        techTask: 'https://docs.google.com/presentation/',
        flowStatus: props,
        date: '06.02.2023',
    },
];
