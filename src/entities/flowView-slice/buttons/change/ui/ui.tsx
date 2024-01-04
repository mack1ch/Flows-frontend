'use client';

import { Change } from '@/shared/icons/change';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';

export const ChangeButton = () => {
    return (
        <>
            <ConfigProvider theme={deleteButtonTheme}>
                <Button size="large" type="text">
                    <Space>
                        <Change />
                        Редактировать
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const deleteButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#449429',
        },
    },
};
