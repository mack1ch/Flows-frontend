import { instance } from "@/shared/api/axios-config";
import { IFormData, IToken } from "@/shared/interface/auth";
import { setCookie } from "@/shared/lib/auth/setCookie";
import { useRouter } from "next/navigation";

export const postUser = async (authProps: IFormData): Promise<IToken | Error> => {
    try {
        const { data }: { data: IToken } = await instance.post(
            '/users/token/',
            {
                email: authProps.email,
                password: authProps.password
            }
        );
        setCookie('accessToken', data.access, { expires: 30, path: '/' });
        setCookie('refreshToken', data.refresh, { expires: 30, path: '/' });
       
        return data;
    } catch (error) {
        throw error;
        return error as Error;
    }
};