import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow, TFlowStatusType } from '@/shared/interface/flow';

export const backlogFlow = async (
    proposalID: number,
    statusType: TFlowStatusType,
): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.patch(
            `proposals/${proposalID}/process/`,
            {
                status: statusType,
            },
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};
