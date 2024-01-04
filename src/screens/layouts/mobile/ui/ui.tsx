'use client';

import React, { useState } from 'react';
import { Header } from '@/entities/header-slice/header';
import { Layout, Skeleton } from 'antd';
import styles from './ui.module.scss';

const { Content } = Layout;

export const LayoutMobile = ({ children }: { children: React.ReactNode }) => {
    const [pageLoading, setPageLoading] = useState(true);
    setTimeout(() => {
        setPageLoading(false);
    }, 1000);
    return (
        <>
            {pageLoading ? (
                <Layout style={{ background: '#fff' }}>
                    <span className={styles.headerSkeleton}>
                        <Skeleton.Input active={pageLoading} />
                        <Skeleton.Button active={pageLoading} />
                    </span>
                    <Content
                        style={{
                            margin: '24px 16px 0',
                            overflow: 'initial',
                            height: '100vh',
                        }}>
                        <Skeleton active={pageLoading} />
                    </Content>
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
        </>
    );
};
