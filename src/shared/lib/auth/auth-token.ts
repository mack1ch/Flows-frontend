'use client';

export const isAuthenticated = (): boolean => {
    const accessToken = getAccessToken();
    return !!accessToken;
};

export const getAccessToken = (): string | null => {
    const token = sessionStorage.getItem('accessToken');
    return token;
};

export const redirectToLogin = (router: any) => {
    router.push('/');
};
