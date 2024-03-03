import { instanceLogged } from '@/shared/api/axios-config';

import { IFlow } from '@/shared/interface/flow';

export const postComment = async (flowID: number, message: string): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.patch(
            `/proposals/${flowID}/process/`,
            {
                status: 'proposalNeedRevision',
                comment: message,
            },
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getFlowByID = async (id: number): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.get(`/proposals/byId/${id}/`);
        return data;
    } catch (error) {
        return error as Error;
    }
};
