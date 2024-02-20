import { instanceLogged } from '@/shared/api/axios-config';
import { IUser } from '@/shared/interface/user';

export const getAuthUser = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
