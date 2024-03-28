'use client';

import { Cover } from '@/entities/landing-slice/cover';
import { Footer } from '@/entities/landing-slice/footer';
import { Form } from '@/entities/landing-slice/form';
import { Header } from '@/entities/landing-slice/header';
import { Layout } from '@/entities/landing-slice/layout';
import { ProductEffects } from '@/entities/landing-slice/productEffects';
import { SwiperTariff } from '@/entities/landing-slice/swiperTarif';
import { WorkSteps } from '@/entities/landing-slice/workSteps';
import localFont from 'next/font/local';
const LabGrotesque = localFont({
    src: [
        {
            path: '../../public/fonts/LabGrotesque-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/LabGrotesque-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/LabGrotesque-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});
export default function Home() {
    return (
        <>
            <div
                className={LabGrotesque.className}
                style={{
                    width: '100vw',
                    height: '100%',
                    backgroundColor: '#F8F8FA',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '40px',
                }}>
                <header style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Header />
                </header>
                <Layout style={{ scrollBehavior: 'smooth' }}>
                    <Cover />
                    <WorkSteps />
                    <ProductEffects />
                    <SwiperTariff />
                    <Form />
                </Layout>
                <Footer />
            </div>
        </>
    );
}
