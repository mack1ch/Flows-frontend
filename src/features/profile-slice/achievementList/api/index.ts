import { instanceLogged } from '@/shared/api/axios-config';
import { IAchievement } from '@/shared/interface/achievement';

export const getAuthAchievement = async (): Promise<IAchievement[] | Error> => {
    const { data }: { data: IAchievement[] } = await instanceLogged.get('/users/achievements/');
    return data;
};
