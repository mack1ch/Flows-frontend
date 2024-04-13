import { TFlowStatusType } from '@/shared/interface/flow';

interface Status {
    color: string;
    title: string;
    text?: string;
}

export function getStatusByType(status: TFlowStatusType | 'loading'): Status {
    let color: string;
    let title: string;
    let text: string | undefined;

    switch (status) {
        case 'proposalCreated':
            color = '#DEDEDE';
            title = 'Заявка создана';
            text = 'На согласовании';
            break;
        case 'proposalInApprove':
            color = '#5ACC71';
            title = 'Процесс согласования';
            text = 'Ответственный';
            break;
        case 'proposalInWork':
            color = '#73AE62';
            title = 'В работе';
            text = 'Согласующий';
            break;
        case 'proposalApproved':
            color = '#FFC95C';
            title = 'Согласована';
            text = 'Ответственный';
            break;
        case 'proposalRejected':
            color = '#ED5656';
            title = 'Отклонено';
            text = 'Ответственный';
            break;
        case 'proposalDone':
            color = '#538A1B';
            title = 'Выполнено';
            text = 'Ответственный';
            break;
        case 'proposalNeedRevision':
            color = '#EDC156';
            title = 'Требуется уточнения у автора';
            text = 'На согласовании';
            break;
        case 'proposalInBacklog':
            color = '#FF8227';
            title = 'Заявка в беклоге';
            text = 'В архиве';
            break;
        case 'loading':
            color = '#3d3d3d';
            title = 'Загрузка';
            break;
        default:
            color = '#3d3d3d';
            title = 'Загрузка';
            break;
    }

    return { color, title, text };
}
