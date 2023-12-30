'use client';

import { LayoutDesktop } from '@/screens/layouts/desktop';
import { LayoutMobile } from '@/screens/layouts/mobile';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import PrivateRoute from '@/shared/lib/auth/private-route';

export default function LayoutPage({ children }: { children: React.ReactNode }) {
    const windowSize = useWindowSize();
    return (
        <>
            <PrivateRoute>
                {windowSize.width > 768 ? (
                    <LayoutDesktop>{children}</LayoutDesktop>
                ) : (
                    <LayoutMobile>{children}</LayoutMobile>
                )}
            </PrivateRoute>
        </>
    );
}
