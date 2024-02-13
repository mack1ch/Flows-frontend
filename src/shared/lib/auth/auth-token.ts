'use client';

export const getAccessToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem('accessToken');
    }
    return null;
};

export const isAuthenticated = (): boolean => {
    const accessToken = getAccessToken();
    return !!accessToken;
};

export const redirectToLogin = (router: any) => {
    router.push('/');
};
