import { instanceLogged } from '@/shared/api/axios-config';

export const deleteProposal = async (flowID: number): Promise<undefined | Error> => {
    try {
        const { data }: { data: undefined } = await instanceLogged.delete(`proposals/${flowID}`);
        return data;
    } catch (error) {
        return error as Error;
    }
};
