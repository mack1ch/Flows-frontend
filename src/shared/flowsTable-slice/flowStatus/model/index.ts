type StatusType = 'sent' | 'inProgress' | 'rejected' | 'done' | 'clarification' | 'comment';

interface Status {
    color: string;
    title: string;
    text?: string;
}

export function getStatusByType(status: StatusType): Status {
    let color: string;
    let title: string;
    let text: string | undefined;

    switch (status) {
        case 'sent':
            color = '#DEDEDE';
            title = 'Отправлено';
            text = 'На согласовании';
            break;
        case 'inProgress':
            color = '#73AE62';
            title = 'В работе';
            text = 'Согласован';
            break;
        case 'rejected':
            color = '#ED5656';
            title = 'Отклонено';
            break;
        case 'done':
            color = '#538A1B';
            title = 'Выполнено';
            break;
        case 'clarification':
            color = '#EDC156';
            title = 'Требуется уточнения у автора';
            text = 'На согласовании';
            break;
        default:
            color = '#3d3d3d';
            title = 'Неизвестный статус';
            break;
    }

    return { color, title, text };
}
