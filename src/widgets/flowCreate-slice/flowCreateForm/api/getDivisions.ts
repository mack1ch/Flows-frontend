import { instanceLogged } from '@/shared/api/axios-config';
import { IDivision } from '@/shared/interface/company';

export const getAllDivisions = async (): Promise<IDivision[] | Error> => {
    try {
        const { data }: { data: IDivision[] } = await instanceLogged.get(`/departments/`);
        return data;
    } catch (error) {
        return error as Error;
    }
};
