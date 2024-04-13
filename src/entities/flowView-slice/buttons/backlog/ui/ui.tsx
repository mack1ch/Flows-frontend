'use client';

import { Button, ConfigProvider, Space, ThemeConfig, message } from 'antd';
import { backlogFlow } from '../api';
import { Backlog } from '@/shared/ui/icons/backlog';

export const BacklogButton = ({ flowID }: { flowID: number }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const handleButtonApprove = async () => {
        try {
            const fetchApprove = await backlogFlow(flowID, 'proposalInBacklog');
            if (fetchApprove) {
                messageApi.open({
                    type: 'success',
                    content: 'Заявка успешно перенесена в бэклог',
                });
                window.location.reload();
            }
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Ошибка на сервере, мы уже работаем над ней',
            });
        }
    };
    return (
        <>
            {contextHolder}
            <ConfigProvider theme={printButtonTheme}>
                <Button onClick={handleButtonApprove} size="large" type="text">
                    <Space>
                        <Backlog />
                        Перенести в бэклог
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const printButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#FF8227',
        },
    },
};
