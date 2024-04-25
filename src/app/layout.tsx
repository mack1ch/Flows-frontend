import type { Metadata } from 'next';
import './globals.scss';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Inverse.Заявки',
    description: 'Цифровой сервис для подачи идей от сотрудников вашего бизнеса',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <Script type="text/javascript" id="metrika-counter" strategy="afterInteractive">
                    {`   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(96681722, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
<noscript><div><img src="https://mc.yandex.ru/watch/96681722" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`}
                </Script>

                {children}
            </body>
        </html>
    );
}
