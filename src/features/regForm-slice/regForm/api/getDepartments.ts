import { instanceLogged } from '@/shared/api/axios-config';
import { IDepartment } from '@/shared/interface/user';

export const getDepartments = async (): Promise<IDepartment[] | Error> => {
    try {
        const { data }: { data: IDepartment[] } = await instanceLogged.get('/departments/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
