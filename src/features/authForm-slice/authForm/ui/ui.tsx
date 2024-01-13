import { Form, Input, ConfigProvider, ThemeConfig, TabsProps, Tabs, Button } from 'antd'
import styles from './ui.module.scss'
import { NavLogo } from '@/shared/ui/header-slice/navLogo';
import { FormInputs } from '@/entities/authForm-slice/formInputs';
import { FormHelpers } from '@/entities/authForm-slice/formHelpers';
import { useEffect, useState } from 'react';



export const AuthForm = () => {
    const [form] = Form.useForm();
    const [isButtonDisable, setButtonDisable] = useState(true);
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Почта',
            children: <FormInputs isSubmited={isButtonDisable} setSubmited={setButtonDisable} label='Почта' placeholder='Введите почту' />,
        },
        {
            key: '2',
            label: 'Номер телефона',
            children: <FormInputs isSubmited={isButtonDisable} setSubmited={setButtonDisable} label='Телефон' placeholder='Введите телефон' />,
        },

    ];
    
    return (
        <>
            <ConfigProvider theme={authFormTheme}>
                <section className={styles.layout}>
                    <Form name="validateOnly" layout='vertical' className={styles.form} form={form}>
                        <NavLogo />
                        <div className={styles.inputLayout}>
                            <Tabs style={{ width: '100%', }} defaultActiveKey="1" items={items} />
                            <FormHelpers />
                            <Form.Item style={{ marginTop: '16px', width: '100%' }}>
                                <Button disabled={isButtonDisable} size='large' style={{ width: '100%' }} type="primary" htmlType="submit">
                                    Войти
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </section>
            </ConfigProvider>
        </>
    )
}

const authFormTheme: ThemeConfig = {
    components: {
        Tabs: {
            colorPrimary: '#449429',
            itemColor: '#757575',
            itemHoverColor: '#449429',
            itemSelectedColor: '#222',
            itemActiveColor: '#449429'
        },
        Button: {
            colorPrimary: '#449429',
            colorBgContainerDisabled: '#BAD6B1',
            colorTextDisabled: '#fff',
            colorPrimaryHover: '#73AE62',
            colorPrimaryActive: '#73AE62'
        }
    }
}