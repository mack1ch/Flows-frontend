import { Message } from '@/features/comment-slice/message';
import styles from './ui.module.scss';
import { Button, ConfigProvider, Form, Input, ThemeConfig, message } from 'antd';
import { useState } from 'react';
import { postComment } from '../api';
import { IComment } from '@/shared/interface/comment';

const { TextArea } = Input;

export const Comment = ({ flowID }: { flowID: number }) => {
    const [messageValue, setMessage] = useState<string>('');
    const [comment, setComments] = useState<IComment | null>(null);
    const [messageApi, contextHolder] = message.useMessage();
    const handleSubmit = async () => {
        try {
            const fetchComment: IComment | Error = await postComment(flowID, messageValue);
            if (fetchComment instanceof Error) return;
            else {
                setComments(fetchComment);
                setMessage('');
            }
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Ошибка на сервере, мы уже работаем над устранением',
            });
        }
    };
    return (
        <>
            <ConfigProvider theme={commentTheme}>
                {contextHolder}
                <div className={styles.layout}>
                    <Message comment={comment} flowID={flowID} />
                    <Form style={{ width: '80%' }} className={styles.form}>
                        <Form.Item style={{ width: '100%' }}>
                            <TextArea
                                autoSize
                                value={messageValue}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ width: '100%' }}
                                placeholder="Комментарий"
                                size="large"
                                name="limitingFactors"
                            />
                        </Form.Item>
                        <Form.Item style={{ width: '100%' }}>
                            <Button onClick={handleSubmit} type="primary" htmlType="submit">
                                Отправить
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </ConfigProvider>
        </>
    );
};

const commentTheme: ThemeConfig = {
    components: {
        Input: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
            borderRadiusLG: 4,
        },
        Button: {
            colorPrimaryHover: '#73AE62',
            colorPrimaryActive: '#73AE62',
            colorPrimary: '#449429',
        },
    },
};
