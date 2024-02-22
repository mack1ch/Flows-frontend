import { instanceLogged } from '@/shared/api/axios-config';
import { IComment } from '@/shared/interface/comment';

export const postComment = async (flowID: number, message: string): Promise<IComment | Error> => {
    try {
        const { data }: { data: IComment } = await instanceLogged.post(
            '/proposals/comments/private/',
            { proposalId: flowID, text: message },
        );

        return data;
    } catch (error) {
        return error as Error;
    }
};
