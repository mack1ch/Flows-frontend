import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'Inverse.Заявки',
    description: 'Цифровой сервис для подачи идей от сотрудников вашего бизнеса',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
