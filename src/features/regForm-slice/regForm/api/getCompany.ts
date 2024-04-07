import { instanceLogged } from '@/shared/api/axios-config';
import { ICompany } from '@/shared/interface/company';

export const getCompany = async (id: number): Promise<ICompany | Error> => {
    try {
        const { data }: { data: ICompany } = await instanceLogged.get(`/companies/forms/${id}`);
        return data;
    } catch (error) {
        return error as Error;
    }
};
