'use client';

import { Download } from '@/shared/icons/download';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';

export const DownloadButton = () => {
    return (
        <>
            <ConfigProvider theme={downloadButtonTheme}>
                <Button size="large" type="text">
                    <Space>
                        <Download />
                        Скачать
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const downloadButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#74757A',
        },
    },
};
