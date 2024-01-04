type StatusType = 'sent' | 'inProgress' | 'rejected' | 'done' | 'clarification' | 'comment';

interface Status {
    text: string;
    color: string;
}

export function getStatusByType(status: StatusType): Status {
    let text: string = '';
    let color: string = '#449429';
    switch (status) {
        case 'sent':
            text = 'заявка отправлена';
            color = '#449429';
            break;
        case 'inProgress':
            text = 'заявка согласована';
            color = '#449429';
            break;
        case 'rejected':
            text = 'заявка отклонена';
            color = '#F16161';
            break;
        case 'done':
            text = 'Работа над заявкой завершена ';
            color = '#449429';
            break;
        case 'clarification':
            text = 'на согласовании';
            color = '#EDC156';
            break;
        case 'comment':
            text = 'оставил комментарий';
            color = '#F0BA38';
        default:
            text = 'неизвестный статус';
            break;
    }

    return { text, color };
}
