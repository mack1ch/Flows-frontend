'use client';

import { Comment } from '@/shared/icons/comment';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';

export const CommentButton = () => {
    return (
        <>
            <ConfigProvider theme={commentButtonTheme}>
                <Button size="large" type="text">
                    <Space>
                        <Comment />
                        Прокомментировать
                    </Space>
                </Button>
            </ConfigProvider>
        </>
    );
};

const commentButtonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#449429',
        },
    },
};
