'use client';

import { Delete } from '@/shared/ui/icons/delete';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';
import { useState } from 'react';
import { DeleteButtonModal } from '../modal';

export const DeleteButton = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <ConfigProvider theme={deleteButtonTheme}>
                <Button onClick={() => setModalOpen(true)} size="large" type="text">
                    <Space>
                        <Delete />
                        Удалить
                    </Space>
                </Button>
            </ConfigProvider>
            <DeleteButtonModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
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
