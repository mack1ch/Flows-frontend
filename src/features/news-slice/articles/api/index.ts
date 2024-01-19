import { instanceLogged } from "@/shared/api/axios-config";
import { IFlow } from "@/shared/interface/flow";

export const getFlows = async (): Promise<IFlow[] | Error> => {
    try {
        const { data }: { data: IFlow[] } = await instanceLogged.get(
            '/proposals/me/',
        );
        return data;
    } catch (error) {

        return error as Error;
    }
};