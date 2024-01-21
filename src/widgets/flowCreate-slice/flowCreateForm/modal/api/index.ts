import { instanceLogged } from "@/shared/api/axios-config";
import { IUser } from "@/shared/interface/user";

export const getUserHeads = async (): Promise<IUser[] | Error> => {
    try {
        const { data }: { data: IUser[] } = await instanceLogged.get('/proposals/heads/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
