import { instance } from "@/shared/api/axios-config";
import { IPost } from "@/shared/interface/post";

export const postLike = async (flowID: number, likes: number): Promise<IPost | Error> => {
    try {
        const { data }: { data: IPost } = await instance.patch(
            `/proposals/posts/${flowID}/likes/add/`
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};