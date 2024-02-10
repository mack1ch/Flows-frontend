import { instance } from '@/shared/api/axios-config';
import { IFormData, IToken } from '@/shared/interface/auth';
import { setCookie } from '@/shared/lib/auth/setCookie';

export const postUser = async (authProps: IFormData): Promise<IToken | Error> => {
    try {
        const { data }: { data: IToken } = await instance.post('/auth/login/', {
            login: authProps.email.length > 0 ? authProps.email : authProps.phone,
            password: authProps.password,
        });
        setCookie('accessToken', data.accessToken, { expires: 30, path: '/' });

        return data;
    } catch (error) {
        return error as Error;
    }
};
