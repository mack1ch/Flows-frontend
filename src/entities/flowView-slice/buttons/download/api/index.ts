import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow } from '@/shared/interface/flow';

export const getFlowByID = async (id: number): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.get(`/proposals/byId/${id}/`);
        return data;
    } catch (error) {
        return error as Error;
    }
};
