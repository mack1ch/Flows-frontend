'use client';

import { Button, ConfigProvider, Space, ThemeConfig, message } from 'antd';
import { useState } from 'react';
import { approveFlow } from '../api';
import { Approve } from '@/shared/ui/icons/approve';

export const ApproveButton = ({ flowID }: { flowID: number }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const handleButtonApprove = async () => {
        try {

            const fetchApprove = await approveFlow(flowID);
            if (fetchApprove) {
                messageApi.open({
                    type: 'success',
                    content: 'Заявка успешно согласована',
                });
             
            }
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Ошибка на сервере, мы уже работаем над ней',
            });

        }
    }
    return (
        <>
            {contextHolder}
            <ConfigProvider theme={printButtonTheme}>
                <Button onClick={handleButtonApprove} size="large" type="text">
                    <Space>
                        <Approve />
                        Согласовать
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const printButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#EF8B17',
        },
    },
};
