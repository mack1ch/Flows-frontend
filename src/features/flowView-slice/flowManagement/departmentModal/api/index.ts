import { instanceLogged } from '@/shared/api/axios-config';
import { IDepartment } from '@/shared/interface/user';

export const changeDepartment = async (
    departmentId: number,
    flowID: number,
): Promise<IDepartment | Error> => {
    try {
        const { data }: { data: IDepartment } = await instanceLogged.post(
            `/proposals/${flowID}/set-department`,
            {
                departmentId: departmentId,
            },
        );

        return data;
    } catch (error) {
        return error as Error;
    }
};

