'use client'

import { ConfigProvider, Form, ThemeConfig } from 'antd'
import styles from './ui.module.scss'
import Input from 'antd/es/input/Input'
import { useEffect, useState } from 'react';
import { IFormData } from '@/shared/interface/auth';



interface IChangeEvent extends React.ChangeEvent {
    target: HTMLInputElement & {
        name: string;
        value: string;
    };
}
export const FormInputs = ({ label, placeholder, setSubmited, formData, setFormData }: { label: string; placeholder: string; setSubmited: (arg: boolean) => void; formData: IFormData, setFormData: any; }) => {
    
    const handleInputChange = (event: IChangeEvent) => {
        const { name, value } = event.target;
        setFormData((prevData: IFormData) => ({
            ...prevData,
            [name]: value
        }));
        if (formData && formData.password?.length > 0 && (formData.email?.length > 0 || formData.phone?.length > 0)) {
            setSubmited(false);
        } else if (formData.password?.length > 0 || formData.email?.length > 0 || formData.phone?.length > 0) {
            setSubmited(true);
        }
    };

    return (
    <>
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