import { instanceLogged } from "@/shared/api/axios-config";
import { IFlow } from "@/shared/interface/flow";

export const approveFlow = async (id: number): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.post(`proposals/${id}/process/`);
        return data;
    } catch (error) {
        return error as Error;
    }
};