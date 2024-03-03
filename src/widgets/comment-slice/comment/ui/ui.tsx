import { Message } from '@/features/comment-slice/message';
import styles from './ui.module.scss';
import { Button, ConfigProvider, Form, Input, ThemeConfig, message } from 'antd';
import { useEffect, useState } from 'react';
import { getFlowByID, postComment } from '../api';

import { IFlow } from '@/shared/interface/flow';
import { PageHeaderWithBackArray } from '@/shared/ui/pageHeaders-slice/backArray';

const { TextArea } = Input;

export const Comment = ({ flowID }: { flowID: number }) => {
    const [messageValue, setMessage] = useState<string>('');
    const [flow, setFlow] = useState<IFlow | null>(null);
    const [newFlow, setNewFlow] = useState<IFlow | undefined>(undefined);
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        const GetFlow = async () => {
            const fetchFlow: IFlow | Error = await getFlowByID(flowID);

            if (fetchFlow instanceof Error) return;
            else {
                setFlow(fetchFlow);
            }
        };
        GetFlow();
    }, []);
    const handleSubmit = async () => {
        try {
            const fetchComment: IFlow | Error = await postComment(flowID, messageValue);

            if (fetchComment instanceof Error) return;
            else {
                setNewFlow(fetchComment);
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
                    {flow && (
                        <PageHeaderWithBackArray
                            pageName={
                                <span>
                                    Комментарии к заявке{' '}
                                    <span className={styles.flowName}>“{flow?.name}”</span>
                                </span>
                            }
                        />
                    )}
                    <Message newFlow={newFlow} flowID={flowID} />
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
