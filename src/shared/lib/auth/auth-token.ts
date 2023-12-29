'use client';

export const isAuthenticated = (): boolean => {
    const accessToken = getAccessToken();
    return !!accessToken;
};

export const getAccessToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    }

    return null;
};

export const redirectToLogin = (router: any) => {
    router.push('/');
};
