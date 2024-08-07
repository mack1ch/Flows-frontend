import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow } from '@/shared/interface/flow';
import { IDepartment, IUser } from '@/shared/interface/user';

export const getAuthUserData = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getDepartments = async (): Promise<IDepartment[] | Error> => {
    try {
        const { data }: { data: IDepartment[] } = await instanceLogged.get('/departments/');
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getFlowByID = async (flowID: number): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.get(`/proposals/byId/${flowID}`);

        return data;
    } catch (error) {
        return error as Error;
    }
};
