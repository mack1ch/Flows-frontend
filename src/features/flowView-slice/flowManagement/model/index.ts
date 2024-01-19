import { ChangeButton } from '@/entities/flowView-slice/buttons/change';
import { CommentButton } from '@/entities/flowView-slice/buttons/coment';
import { DeleteButton } from '@/entities/flowView-slice/buttons/delete';
import { DownloadButton } from '@/entities/flowView-slice/buttons/download';
import { PrintButton } from '@/entities/flowView-slice/buttons/print';
import { IFlowStatus, TFlowStatusType } from '@/shared/interface/flow';

interface Status {
    buttonsArray?: (() => JSX.Element)[];
}

export function getButtonsArrayByType(status: TFlowStatusType): Status {
    let buttonsArray: (() => JSX.Element)[] | undefined;

    switch (status) {
        case 'proposal_created':
            buttonsArray = [ChangeButton, DeleteButton, DownloadButton, PrintButton];
            break;
        case 'proposal_in_work':
            buttonsArray = [DownloadButton, PrintButton];
            break;
        case 'proposal_rejected':
            buttonsArray = [DownloadButton, PrintButton];
            break;
        case 'proposal_done':
            buttonsArray = [DownloadButton, PrintButton];
            break;
        case 'proposal_in_approve':
            buttonsArray = [CommentButton, ChangeButton, DeleteButton, DownloadButton, PrintButton];
            break;
        default:
            break;
    }

    return { buttonsArray };
}
