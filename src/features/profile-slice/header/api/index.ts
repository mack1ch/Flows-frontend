import { instanceLogged } from '@/shared/api/axios-config';
import { IUser } from '@/shared/interface/user';

export const getAuthUser = async (): Promise<IUser | Error> => {
    const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
    return data;
};

export const logOut = async (): Promise<string | Error> => {
    const { data }: { data: string } = await instanceLogged.delete('/auth/logout/');
    
    return data;
};
