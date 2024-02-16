import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow, IFlowStatus } from '@/shared/interface/flow';

export const getFlowsByStatusID = async (statusID: string): Promise<IFlow[] | Error> => {
    try {
        const { data }: { data: IFlow[] } = await instanceLogged.get(
            `/proposals/my/?status=${statusID && statusID}`,
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getFlowsStatuses = async (): Promise<IFlowStatus[] | Error> => {
    try {
        const { data }: { data: IFlowStatus[] } = await instanceLogged.get('/proposals/statuses/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
