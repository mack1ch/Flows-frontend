import { instanceLogged } from '@/shared/api/axios-config';

import { IUser } from '@/shared/interface/user';
import { IFlow } from '@/shared/interface/flow';

export const getAuthUserData = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
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
