'use client';

import React, { useState } from 'react';
import { SideHeader } from '@/entities/header-slice/sideHeader';
import { Layout, Skeleton } from 'antd';
import styles from './ui.module.scss';
const { Content, Footer, Sider } = Layout;

export const LayoutDesktop = ({ children }: { children: React.ReactNode }) => {
    const [pageLoading, setPageLoading] = useState(true);
    setTimeout(() => {
        setPageLoading(false);
    }, 1000);
    return (
        <>
            {pageLoading ? (
                <Layout hasSider>
                    <Sider
                        width={270}
                        style={{
                            background: 'inherit',
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                        }}>
                        <span className={styles.sideHeaderSkeleton}>
                            <Skeleton.Input active={pageLoading} size="default" />
                            <Skeleton active={pageLoading} />
                        </span>
                    </Sider>
                    <Layout style={{ marginLeft: 270, background: '#fff' }}>
                        <Content
                            style={{
                                margin: '32px 40px 0 40px',
                                overflow: 'initial',
                                height: '100vh',
                            }}>
                            <Skeleton active={pageLoading} />
                        </Content>
                    </Layout>
                </Layout>
            ) : (
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
                                margin: '32px 40px 0 40px',
                                overflow: 'initial',
                                height: '100%',
                            }}>
                            {children}
                        </Content>
                        <Footer style={{ textAlign: 'left', background: '#fff' }}>
                            Inverse Заявки ©2023 Сделано в Inverse
                        </Footer>
                    </Layout>
                </Layout>
            )}
        </>
    );
};
