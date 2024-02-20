import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow, IFlowStatus } from '@/shared/interface/flow';
import { IUser } from '@/shared/interface/user';

export const getAuthUser = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getFlowsByStatusID = async (statusID: string): Promise<IFlow[] | Error> => {
    try {
        const user: IUser | Error = await getAuthUser();
        if (user instanceof Error) return user as Error;
        const reqLink: string =
            user.role.name === 'moderator'
                ? `proposals/${statusID && `?status=${statusID}`}`
                : `/proposals/my/${statusID && `?status=${statusID}`}`;

        const { data }: { data: IFlow[] } = await instanceLogged.get(reqLink);

        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getFlowsStatuses = async (): Promise<IFlowStatus[] | Error> => {
    try {
        const { data }: { data: IFlowStatus[] } = await instanceLogged.get('/proposals/statuses/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
