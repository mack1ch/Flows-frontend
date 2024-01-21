import { instanceLogged } from "@/shared/api/axios-config";
import { IFlowCategory } from "@/shared/interface/flow";

export const getFlowCategories = async (): Promise<IFlowCategory[] | Error> => {
    try {
        const { data }: { data: IFlowCategory[] } = await instanceLogged.get(
            `/proposals/categories/`,
        );
        return data;
    } catch (error) {

        return error as Error;
    }
};
