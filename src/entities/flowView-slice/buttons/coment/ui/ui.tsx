'use client';

import { Comment } from '@/shared/ui/icons/comment';
import { Button, ConfigProvider, Space, ThemeConfig } from 'antd';
import { useRouter } from 'next/navigation';

export const CommentButton = () => {
    const router = useRouter();
    return (
        <>
            <ConfigProvider theme={commentButtonTheme}>
                <Button
                    onClick={() => router.push('/flows/my/comment/id/')}
                    size="large"
                    type="text">
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
