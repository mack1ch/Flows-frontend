'use client';

import { Delete } from '@/shared/icons/delete';
import { Button, Space } from 'antd';
import ConfigProvider, { ThemeConfig } from 'antd/es/config-provider';

export const DeleteButton = () => {
    return (
        <>
            <ConfigProvider theme={deleteButtonTheme}>
                <Button size="large" type="text">
                    <Space>
                        <Delete />
                        Удалить
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const deleteButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#ED5656',
        },
    },
};
