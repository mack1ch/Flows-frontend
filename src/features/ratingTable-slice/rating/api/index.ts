import { instanceLogged } from "@/shared/api/axios-config";
import { IPost } from "@/shared/interface/post";

export const getRatingPosts = async (): Promise<IPost[] | Error> => {
    try {
        const { data }: { data: IPost[] } = await instanceLogged.get(
            `/proposals/posts/rating/`
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};