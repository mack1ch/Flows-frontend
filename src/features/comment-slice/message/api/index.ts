import { instanceLogged } from '@/shared/api/axios-config';
import { IComment } from '@/shared/interface/comment';
import { IUser } from '@/shared/interface/user';

export const getAuthUserData = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getComments = async (flowID: number): Promise<IComment[] | Error> => {
    try {
        const { data }: { data: IComment[] } = await instanceLogged.get(
            `proposals/comments/private/?proposalId=${flowID && flowID}`,
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};
