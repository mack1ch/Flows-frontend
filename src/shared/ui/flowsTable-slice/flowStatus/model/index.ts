import { TFlowStatusType } from "@/shared/interface/flow";

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
        case 'proposal_created':
            color = '#DEDEDE';
            title = 'Заявка создана';
            text = 'На согласовании';
            break;
        case 'proposal_in_approve':
            color = '#73AE62';
            title = 'Процесс согласования';
            text = 'Ответственный';
            break;
        case 'proposal_in_work':
            color = '#73AE62';
            title = 'В работе';
            text = 'Согласован';
            break;
        case 'proposal_rejected':
            color = '#ED5656';
            title = 'Отклонено';
            break;
        case 'proposal_done':
            color = '#538A1B';
            title = 'Выполнено';
            break;
        case 'proposal_need_revision':
            color = '#EDC156';
            title = 'Требуется уточнения у автора';
            text = 'На согласовании';
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
