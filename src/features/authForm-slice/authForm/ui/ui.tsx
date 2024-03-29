'use client';

import { Form, ConfigProvider, ThemeConfig, TabsProps, Tabs, Button, message } from 'antd';
import styles from './ui.module.scss';
import { NavLogo } from '@/shared/ui/header-slice/navLogo';
import { FormInputs } from '@/entities/authForm-slice/formInputs';
import { FormHelpers } from '@/entities/authForm-slice/formHelpers';
import { useEffect, useState } from 'react';
import { postSession, postUser } from '../api';
import { useRouter } from 'next/navigation';
import { getAccessToken } from '@/shared/lib/auth/auth-token';
import Link from 'next/link';
import { IToken } from '@/shared/interface/auth';

interface IFormData {
    email: string;
    phone: string;
    password: string;
}

export const AuthForm = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const [formData, setFormData] = useState<IFormData>({ email: '', phone: '', password: '' });
    const [isButtonDisable, setButtonDisable] = useState(true);
    const [isButtonLoading, setButtonLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Почта',
            children: (
                <FormInputs
                    formData={formData}
                    setFormData={setFormData}
                    setSubmitted={setButtonDisable}
                    label="Почта"
                    placeholder="Введите почту"
                />
            ),
        },
        {
            key: '2',
            label: 'Номер телефона',
            children: (
                <FormInputs
                    formData={formData}
                    setFormData={setFormData}
                    setSubmitted={setButtonDisable}
                    label="Телефон"
                    placeholder="Введите телефон"
                />
            ),
        },
    ];
    const getNewSession = async () => {
        const fetchSession: IToken | Error = await postSession();
        if (fetchSession instanceof Error) return;
        else {
            router.prefetch('/flows/my');
            router.push('/flows/my/');
        }
    };
    useEffect(() => {
        getNewSession();
    }, []);
    const loadingFinish = () => {
        setTimeout(() => {
            setButtonLoading(false);
        }, 10000);
    };

    const onButtonSubmit = async () => {
        try {
            setButtonLoading(true);
            const response = await postUser(formData);
            if (!!getAccessToken() && response instanceof Error) {
                router.push('/flows/my/');
            }
            if (response instanceof Error) {
                messageApi.open({
                    type: 'error',
                    content: 'Неверный логин или пароль',
                });
                setButtonLoading(false);
                return;
            } else if (!!getAccessToken()) {
                router.push('/flows/my/');
            }

            loadingFinish();
            return;
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Неверный логин или пароль',
            });
            setButtonLoading(false);
        }
    };
    return (
        <>
            {contextHolder}
            <ConfigProvider theme={authFormTheme}>
                <section className={styles.layout}>
                    <Form
                        autoComplete="on"
                        name="validateOnly"
                        layout="vertical"
                        className={styles.form}
                        form={form}>
                        <NavLogo />
                        <div className={styles.inputLayout}>
                            <Tabs style={{ width: '100%' }} defaultActiveKey="1" items={items} />
                            <FormHelpers />
                            <Form.Item style={{ marginTop: '16px', width: '100%' }}>
                                <Button
                                    onClick={onButtonSubmit}
                                    loading={isButtonLoading}
                                    disabled={isButtonDisable}
                                    size="large"
                                    style={{ width: '100%' }}
                                    type="primary"
                                    htmlType="submit">
                                    Войти
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                    <div className={styles.linkLayout}>
                        <Link className={styles.link} href="/">
                            postideas.ru
                        </Link>
                    </div>
                </section>
            </ConfigProvider>
        </>
    );
};

const authFormTheme: ThemeConfig = {
    components: {
        Tabs: {
            colorPrimary: '#449429',
            itemColor: '#757575',
            itemHoverColor: '#449429',
            itemSelectedColor: '#222',
            itemActiveColor: '#449429',
        },
        Button: {
            colorPrimary: '#449429',
            colorBgContainerDisabled: '#BAD6B1',
            colorTextDisabled: '#fff',
            colorPrimaryHover: '#73AE62',
            colorPrimaryActive: '#73AE62',
        },
    },
};
