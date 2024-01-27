import { instanceLogged } from "@/shared/api/axios-config";
import { IFlow } from "@/shared/interface/flow";
import { IPost } from "@/shared/interface/post";

export const getFlowByID = async (id?: number): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.get(`/proposals/${id}/`);
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const getPostByID = async (id?: number): Promise<IPost | Error> => {
    try {
        const { data }: { data: IPost } = await instanceLogged.get(`/proposals/posts/${id}/`);
        return data;
    } catch (error) {
        return error as Error;
    }
};
