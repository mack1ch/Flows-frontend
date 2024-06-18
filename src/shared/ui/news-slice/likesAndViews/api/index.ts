import { instanceLogged } from '@/shared/api/axios-config';
import { IPost } from '@/shared/interface/post';

export const postLikeOrDislike = async (postID: number, type: 1 | 2): Promise<IPost | Error> => {
    try {
        const { data }: { data: IPost } = await instanceLogged.post(
            `/proposals/posts/like/${postID}`,
            {
                type: type,
            },
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const removeLike = async (postID: number): Promise<IPost | Error> => {
    try {
        const { data }: { data: IPost } = await instanceLogged.patch(
            `/proposals/events/${postID}/likes/remove/`,
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};
