import { instanceLogged } from "@/shared/api/axios-config";
import { IPost } from "@/shared/interface/post";
import { IUser } from "@/shared/interface/user";

export const getRatingPosts = async (): Promise<IPost[] | Error> => {
    try {
        const { data }: { data: IPost[] } = await instanceLogged.get(
            `/proposals/events/rating/`
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getAuthUserData = async (): Promise<IUser | Error> => {
    try {
        const { data }: { data: IUser } = await instanceLogged.get('/users/me/');
        return data;
    } catch (error) {
        return error as Error;
    }
};