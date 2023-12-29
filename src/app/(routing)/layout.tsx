'use client';

import { Header } from '@/entitites/header-slice/header';
import { SideHeader } from '@/entitites/header-slice/sideHeader';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import PrivateRoute from '@/shared/lib/auth/private-route';
import { Layout, Skeleton } from 'antd';
import { useState } from 'react';

const { Content, Footer, Sider } = Layout;

export default function LayoutPage({ children }: { children: React.ReactNode }) {
    const windowSize = useWindowSize();
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
    return (
        <>
            <PrivateRoute>
                {loading ? (
                    <div style={{ padding: '16px' }}>
                        <Skeleton />
                    </div>
                ) : windowSize?.width > 768 ? (
                    <Layout hasSider>
                        <Sider
                            width={270}
                            style={{
                                overflow: 'auto',
                                height: '100vh',
                                position: 'fixed',
                                left: 0,
                                top: 0,
                                bottom: 0,
                            }}>
                            <SideHeader />
                        </Sider>

                        <Layout style={{ marginLeft: 270, background: '#fff' }}>
                            <Content
                                style={{
                                    margin: '24px 16px 0',
                                    overflow: 'initial',
                                    height: '100vh',
                                }}>
                                {children}
                            </Content>
                            <Footer style={{ textAlign: 'left', background: '#fff' }}>
                                Inverse Заявки ©2023 Сделано в Inverse
                            </Footer>
                        </Layout>
                    </Layout>
                ) : (
                    <Layout style={{ background: '#fff' }}>
                        <Header />
                        <Content
                            style={{
                                margin: '24px 16px 0',
                                overflow: 'initial',
                                height: '100vh',
                            }}>
                            {children}
                        </Content>
                    </Layout>
                )}
            </PrivateRoute>
        </>
    );
}
