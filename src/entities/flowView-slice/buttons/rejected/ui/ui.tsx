'use client';

import { Delete } from '@/shared/ui/icons/delete';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';
import { useState } from 'react';
import { RejectedButtonModal } from '../modal';

export const RejectedButton = ({ flowID }: { flowID: number }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <ConfigProvider theme={deleteButtonTheme}>
                <Button onClick={() => setModalOpen(true)} size="large" type="text">
                    <Space>
                        <Delete />
                        Отклонить
                    </Space>
                </Button>
            </ConfigProvider>
            <RejectedButtonModal
                flowID={flowID}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
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
