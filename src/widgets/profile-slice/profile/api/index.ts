import { instanceLogged } from '@/shared/api/axios-config';
import { IPost } from '@/shared/interface/post';
import { IUser } from '@/shared/interface/user';

export const getAuthUser = async (): Promise<IUser | Error> => {
    const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
    return data;
};

