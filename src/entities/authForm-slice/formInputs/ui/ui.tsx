'use client';

import { ConfigProvider, Form, ThemeConfig, Input } from 'antd';
import styles from './ui.module.scss';
import { IFormData } from '@/shared/interface/auth';
import { RequestFields } from '../data';
import { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { isNonEmptyArray } from '@/shared/lib/check/emptyaArray';


export const FormInputs = ({
    label,
    placeholder,
    setSubmitted,
    formData,
    setFormData,
}: {
    label: string;
    placeholder: string;
    setSubmitted: (arg: boolean) => void;
    formData: IFormData;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        // Проверяем готовность формы при изменении данных
        if (!isFormValid(formData)) {
            setSubmitted(true);
        } else setSubmitted(false);
    }, [formData, setSubmitted]);

    const isFormValid = (values: Partial<IFormData>): boolean => {
        return RequestFields.every((fieldName) => {
            const fieldValue = values[fieldName];
            return (
                fieldValue !== undefined &&
                fieldValue !== null &&
                fieldValue !== '' &&
                (Array.isArray(fieldValue) ? isNonEmptyArray(fieldValue) : true)
            );
        });
    };
    return (
        <>
            <ConfigProvider theme={inputTheme}>
                <div className={styles.layout}>
                    <Form.Item
                        style={{ width: '100%', textAlign: 'start', alignItems: 'flex-start' }}
                        label={label}>
                        <Input
                            prefix={
                                <UserOutlined
                                    style={{ color: '#cfcfcf' }}
                                    className="site-form-item-icon"
                                />
                            }
                            name={label == 'Почта' ? 'email' : 'phone'}
                            value={label === 'Почта' ? formData.email : formData.phone}
                            onChange={handleInputChange}
                            size="large"
                            placeholder={placeholder}
                        />
                    </Form.Item>
                    <Form.Item
                        style={{ width: '100%', textAlign: 'start', alignItems: 'flex-start' }}
                        label="Пароль">
                        <Input.Password
                            prefix={
                                <LockOutlined
                                    style={{ color: '#cfcfcf' }}
                                    className="site-form-item-icon"
                                />
                            }
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            type="password"
                            size="large"
                            placeholder="Введите пароль"
                        />
                    </Form.Item>
                </div>
            </ConfigProvider>
        </>
    );
};
const inputTheme: ThemeConfig = {
    components: {
        Input: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        },
    },
};
