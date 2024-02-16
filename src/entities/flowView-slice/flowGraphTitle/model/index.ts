import { TFlowStatusType } from '@/shared/interface/flow';

interface Status {
    text: string;
    color: string;
}

export function getStatusByType(status: TFlowStatusType): Status {
    let text: string = '';
    let color: string = '#449429';
    switch (status) {
        case 'proposalCreated':
            text = 'заявка отправлена';
            color = '#449429';
            break;
        case 'proposalApproved':
            text = 'заявка согласована';
            color = '#449429';
            break;
        case 'proposalRejected':
            text = 'заявка отклонена';
            color = '#F16161';
            break;
        case 'proposalDone':
            text = 'работа над заявкой завершена ';
            color = '#449429';
            break;
        case 'proposalInApprove':
            text = 'на согласовании';
            color = '#EDC156';
            break;
        case 'proposalNeedRevision':
            text = 'требуется уточнения у автора';
            color = '#F0BA38';
        case 'proposalInWork':
            text = 'заявка находится в работе';
            color = '#F0BA38';

        default:
            text = 'неизвестный статус';
            break;
    }

    return { text, color };
}
