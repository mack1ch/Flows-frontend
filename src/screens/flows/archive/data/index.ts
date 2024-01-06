import { IFlowTableItems } from '@/shared/interface/flow';
import { IFlowStatus } from '@/shared/interface/flowStatus';

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
    {
        id: 3,
        flowName: 'Автоматизация разделения блюд при внесении отзывов',
        techTask: 'https://docs.google.com/presentation/',
        flowStatus: props,
        date: '06.02.2023',
    },
    {
        id: 4,
        flowName: 'Оповещение сотрудников в зале о появление Вора',
        techTask: 'https://docs.google.com/presentation/',
        flowStatus: props,
        date: '06.02.2023',
    },
    {
        id: 5,
        flowName: 'Корректность заказов ФРОВ',
        techTask: 'https://docs.google.com/presentation/',
        flowStatus: props,
        date: '06.02.2023',
    },
];
