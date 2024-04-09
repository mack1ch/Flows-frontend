import { instance } from '@/shared/api/axios-config';
import { IFormData, IToken } from '@/shared/interface/auth';

export const postUser = async (authProps: IFormData): Promise<IToken | Error> => {
    try {
        const { data }: { data: IToken } = await instance.post('/auth/login/', {
            login: authProps.email.length > 0 ? authProps.email : authProps.phone,
            password: authProps.password,
        });
        sessionStorage.setItem('accessToken', data.accessToken);
        
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const postSession = async (): Promise<IToken | Error> => {
    try {
        const { data }: { data: IToken } = await instance.post('/session/refresh/');
        sessionStorage.setItem('accessToken', data.accessToken);
        return data;
    } catch (error) {
        return error as Error;
    }
};
