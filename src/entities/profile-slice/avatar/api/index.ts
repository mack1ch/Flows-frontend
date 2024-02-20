import { instanceLogged } from '@/shared/api/axios-config';

import { IUser } from '@/shared/interface/user';

export const postAvatar = async (avatar: FormData): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.post(
            '/users/assets/avatars/',
            avatar,
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};
