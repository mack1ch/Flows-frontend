'use client';

import { Print } from '@/shared/ui/icons/print';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';

export const PrintButton = () => {
    return (
        <>
            <ConfigProvider theme={printButtonTheme}>
                <Button size="large" type="text">
                    <Space>
                        <Print />
                        Распечатать
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const printButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#74757A',
        },
    },
};
