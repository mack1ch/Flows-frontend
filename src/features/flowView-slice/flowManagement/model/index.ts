import { ChangeButton } from '@/entities/flowView-slice/buttons/change';
import { CommentButton } from '@/entities/flowView-slice/buttons/coment';
import { DeleteButton } from '@/entities/flowView-slice/buttons/delete';
import { DownloadButton } from '@/entities/flowView-slice/buttons/download';
import { PrintButton } from '@/entities/flowView-slice/buttons/print';

type StatusType = 'sent' | 'inProgress' | 'rejected' | 'done' | 'clarification';

interface Status {
    buttonsArray?: (() => JSX.Element)[];
}

export function getButtonsArrayByType(status: StatusType): Status {
    let buttonsArray: (() => JSX.Element)[] | undefined;

    switch (status) {
        case 'sent':
            buttonsArray = [ChangeButton, DeleteButton, DownloadButton, PrintButton];
            break;
        case 'inProgress':
            buttonsArray = [DownloadButton, PrintButton];
            break;
        case 'rejected':
            buttonsArray = [DownloadButton, PrintButton];
            break;
        case 'done':
            buttonsArray = [DownloadButton, PrintButton];
            break;
        case 'clarification':
            buttonsArray = [CommentButton, ChangeButton, DeleteButton, DownloadButton, PrintButton];
            break;
        default:
            break;
    }

    return { buttonsArray };
}
