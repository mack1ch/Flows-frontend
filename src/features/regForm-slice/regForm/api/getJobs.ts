import { instanceLogged } from '@/shared/api/axios-config';
import { IJob } from '@/shared/interface/user';

export const getJobs = async (): Promise<IJob[] | Error> => {
    try {
        const { data }: { data: IJob[] } = await instanceLogged.get('/jobs/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
