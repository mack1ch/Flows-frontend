import { IUserRegister } from '../iterface';
import { instance } from '@/shared/api/axios-config';
import { splitFullName } from '@/shared/lib/parse/user';
import { IToken } from '@/shared/interface/auth';

export const postUser = async (authProps: IUserRegister): Promise<IToken | Error> => {
    const { lastName, firstName, surName } = splitFullName(authProps.fio);
    try {
        const resData = {
            firstname: firstName,
            lastname: lastName,
            surname: surName,
            email: authProps.email,
            phone: `8${authProps.phone}`,
            department: authProps.department,
            job: authProps.job,
            birthday: authProps.birthday,
            role: 'member',
            company: authProps.company,
            telegram: authProps.telegram,
        };
        const { data }: { data: IToken } = await instance.post('/auth/register/', resData);
        sessionStorage.setItem('accessToken', data.accessToken);
        return data;
    } catch (error) {
        return error as Error;
    }
};
