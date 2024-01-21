import { TFlowStatusType } from "@/shared/interface/flow";

interface Status {
    text: string;
    color: string;
}

export function getStatusByType(status: TFlowStatusType): Status {
    let text: string = '';
    let color: string = '#449429';
    switch (status) {
        case 'proposal_created':
            text = 'заявка отправлена';
            color = '#449429';
            break;
        case 'proposal_approved':
            text = 'заявка согласована';
            color = '#449429';
            break;
        case 'proposal_rejected':
            text = 'заявка отклонена';
            color = '#F16161';
            break;
        case 'proposal_done':
            text = 'работа над заявкой завершена ';
            color = '#449429';
            break;
        case 'proposal_in_approve':
            text = 'на согласовании';
            color = '#EDC156';
            break;
        case 'proposal_need_revision':
            text = 'требуется уточнения у автора';
            color = '#F0BA38';
        case 'proposal_in_work':
            text = 'заявка находится в работе';
            color = '#F0BA38';

        default:
            text = 'неизвестный статус';
            break;
    }

    return { text, color };
}
