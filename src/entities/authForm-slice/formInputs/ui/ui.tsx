'use client'

import { ConfigProvider, Form, ThemeConfig } from 'antd'
import styles from './ui.module.scss'
import Input from 'antd/es/input/Input'
import { useEffect, useState } from 'react';

interface IFormData {
    email: string;
    phone: string;
    password: string;
}

interface IChangeEvent extends React.ChangeEvent {
    target: HTMLInputElement & {
        name: string;
        value: string;
    };
}
export const FormInputs = ({ label, placeholder, isSubmited, setSubmited }: { label: string; placeholder: string; isSubmited: boolean; setSubmited: (arg: boolean) => void }) => {
    const [formData, setFormData] = useState<IFormData>({ email: '', phone: '', password: '' })

    const handleInputChange = (event: IChangeEvent) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        if (formData && formData.password?.length > 0 && (formData.email?.length > 0 || formData.phone?.length > 0)) {
            setSubmited(false);
        } else if (formData.password?.length > 0 || formData.email?.length > 0 || formData.phone?.length > 0) {
            setSubmited(true);
        }
    };
   
    return (<>
        <ConfigProvider theme={inputTheme}>
            <div className={styles.layout}>
                <Form.Item style={{ width: '100%', textAlign: 'start', alignItems: 'flex-start' }} label={label}>
                    <Input name={label == 'Почта' ? 'email' : 'phone'} value={label === 'Почта' ? formData.email : formData.phone} onChange={handleInputChange} size='large' placeholder={placeholder} />
                </Form.Item>
                <Form.Item style={{ width: '100%', textAlign: 'start', alignItems: 'flex-start' }} label='Пароль'>
                    <Input name='password' value={formData.password} onChange={handleInputChange} type='password' size='large' placeholder='Введите пароль' />
                </Form.Item>
            </div>
        </ConfigProvider>
    </>)
}
const inputTheme: ThemeConfig = {
    components: {
        Input: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        }
    }
}