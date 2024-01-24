import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'Inverse Заявки',
    description: 'Inverse Заявки',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                {children}
            </body>
        </html>
    );
}
