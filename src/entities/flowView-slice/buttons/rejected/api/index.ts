import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow } from '@/shared/interface/flow';

export const rejectedFlow = async (flowID: number, text: string): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.patch(
            `proposals/${flowID}/process`,
            {
                status: 'proposalRejected',
                comment: text,
            },
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};
