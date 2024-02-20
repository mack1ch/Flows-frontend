import { instanceLogged } from '@/shared/api/axios-config';
import { IUser } from '@/shared/interface/user';

export const logoutUser = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.delete('/auth/logout/');
        sessionStorage.removeItem('accessToken');
        return data;
    } catch (error) {
        return error as Error;
    }
};
