import { instanceLogged } from "@/shared/api/axios-config";
import { IPost } from "@/shared/interface/post";

export const postLike = async (flowID: number): Promise<IPost | Error> => {
    try {
        const { data }: { data: IPost } = await instanceLogged.patch(
            `/proposals/posts/${flowID}/likes/add/`
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const removeLike = async (flowID: number): Promise<IPost | Error> => {
    try {
        const { data }: { data: IPost } = await instanceLogged.patch(
            `/proposals/posts/${flowID}/likes/remove/`
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};