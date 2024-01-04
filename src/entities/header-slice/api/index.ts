import { instanceLogged } from '@/shared/api/axios-config';
import { IUser } from '@/shared/interface/user';

export const GetAuthUserData = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/auth/users/me/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
