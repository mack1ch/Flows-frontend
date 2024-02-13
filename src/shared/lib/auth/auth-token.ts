'use client';

export const isAuthenticated = (): boolean => {
    const accessToken = getAccessToken();
    return !!accessToken;
};

export const getAccessToken = (): string | null => {
    if (typeof window !== 'undefined') {
        sessionStorage.getItem('accessToken');
    }
    return null;
};

export const redirectToLogin = (router: any) => {
    router.push('/');
};
