'use client';

import { SideHeader } from '@/entitites/header';
import PrivateRoute from '@/shared/lib/auth/private-route';
import { Layout } from 'antd';

const { Content, Footer, Sider } = Layout;

export default function LayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PrivateRoute>
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
                            style={{ margin: '24px 16px 0', overflow: 'initial', height: '100vh' }}>
                            {children}
                        </Content>
                        <Footer style={{ textAlign: 'center', background: '#fff' }}>
                            Inverse Заявки ©2023 Сделано в Inverse
                        </Footer>
                    </Layout>
                </Layout>
            </PrivateRoute>
        </>
    );
}
