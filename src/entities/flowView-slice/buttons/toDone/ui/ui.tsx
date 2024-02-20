'use client';

import { Button, ConfigProvider, Space, ThemeConfig, message } from 'antd';
import { approveFlow } from '../api';
import { Done } from '@/shared/ui/icons/done';

export const ToDoneButton = ({ flowID }: { flowID: number }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const handleButtonApprove = async () => {
        try {
            const fetchApprove = await approveFlow(flowID, 'proposalDone');
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
                        <Done />
                        Заявка выполнена
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const printButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#449429',
        },
    },
};
