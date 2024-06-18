import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow, IFlowStatus, TFlowStatusType } from '@/shared/interface/flow';
import { IUser } from '@/shared/interface/user';

export const getAuthUser = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getFlowsByStatusID = async (
    statusIDS: string[],
    statusesArray: IFlowStatus[],
): Promise<IFlow[] | Error> => {
    try {
        const user: IUser | Error = await getAuthUser();
        if (user instanceof Error) return user as Error;

        const getStatusTypeByID = statusIDS.map(
            (statusID) =>
                statusesArray.find((status) => status.id.toString() === statusID)?.statusType,
        );
        const reqLink: string =
            user.role.name === 'moderator'
                ? `proposals/${
                      getStatusTypeByID[0] !== undefined
                          ? `?status=${getStatusTypeByID.map((statusType) => statusType + ',')}`
                          : ''
                  }`
                : `/proposals/my/${
                      getStatusTypeByID[0] !== undefined
                          ? `?status==${getStatusTypeByID.map((statusType) => statusType + ',')}`
                          : ''
                  }`;

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
