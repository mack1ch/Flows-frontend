'use client';

import { Button, ConfigProvider, Space, ThemeConfig, message } from 'antd';
import { approveFlow } from '../api';
import { SwipeInWork } from '@/shared/ui/icons/inWork';

export const InWorkButton = ({ flowID }: { flowID: number }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const handleButtonApprove = async () => {
        try {
            const fetchApprove = await approveFlow(flowID, 'proposalInWork');
            if (fetchApprove) {
                messageApi.open({
                    type: 'success',
                    content: 'Заявка успешно передана в работу',
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
                        <SwipeInWork />
                        Перенести в работу
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const printButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#FFC95C',
        },
    },
};
