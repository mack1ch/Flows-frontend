'use client';

import {
    Button,
    Checkbox,
    ConfigProvider,
    Form,
    Input,
    Radio,
    RadioChangeEvent,
    Space,
    message,
} from 'antd';
import { flowFormTheme } from '../theme';
import styles from './ui.module.scss';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ICreateNoCommerceForm } from '@/shared/interface/flowsCreateForm';
import { getAuthUser } from '../api/getAuthUser';
import { IUser } from '@/shared/interface/user';
import { getUserFIO } from '@/shared/lib/parse/user';
import { RequestFields } from '../data';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { createFlow } from '../api/createFlow';
import { isNonEmptyArray } from '@/shared/lib/check/emptyArray';

const { TextArea } = Input;

export const FlowNoCommerceForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [formData] = Form.useForm();
    const { width, height } = useWindowSize();
    const router = useRouter();
    const [authUser, setAuthUser] = useState<IUser>({} as IUser);
    const [inputValues, setInputValues] = useState<ICreateNoCommerceForm>({
        address: '',
        city: '',
        cause: '',
        material: '',
        newProduct: '',
    });

    // Запрос на получение данных о пользователе и типе заявки
    useEffect(() => {
        const fetchData = async () => {
            const fetchUser = await getAuthUser();
            if (!(fetchUser instanceof Error)) {
                setAuthUser(fetchUser);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        // Проверяем готовность формы при изменении данных
        if (isFormValid(inputValues)) {
            formData
                .validateFields()
                .then(() => {
                    // Все поля валидны
                })
                .catch(() => {
                    // Есть невалидные поля
                });
        }
    }, [inputValues, formData]);

    // Изменение типа заявки
    const onRequestTypeChange = (e: RadioChangeEvent) => {
        handleInputChange('flowType', e.target.value);
    };

    // Проверка, является ли форма заполненной
    const isFormValid = (values: Partial<ICreateNoCommerceForm>): boolean => {
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

    // Функция для изменения инпутов в форме
    const handleInputChange = (
        name: string,
        value: string | number | CheckboxValueType[] | number[] | null,
    ) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Отпрвка формы
    const handleSubmit = async () => {
        try {
            await formData.validateFields();
            const res = await createFlow(inputValues);
            if (!(res instanceof Error)) router.push('/flows/my');
        } catch (error) {
            message.error('Ошибка на сервере, мы уже работаем над устранением');
        }
    };
    return (
        <>
            <>
                {contextHolder}
                <section className={styles.layout}>
                    <ConfigProvider theme={flowFormTheme}>
                        <Form style={{ width: '100%' }} layout="vertical" form={formData}>
                            <div className={styles.formLayout}>
                                <div className={styles.inputLayout}>
                                    {/* Full Name */}
                                    <Form.Item style={{ width: '100%' }} required label="ФИО">
                                        <Input
                                            width={360}
                                            size="large"
                                            name="fullName"
                                            disabled
                                            value={getUserFIO(authUser) || 'Загрузка'}
                                            onChange={(e) =>
                                                handleInputChange('userName', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {/* Telegram ID */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="ID в Telegram">
                                        <Input
                                            width={360}
                                            size="large"
                                            name="telegramId"
                                            disabled
                                            value={authUser.telegram || 'Загрузка'}
                                            onChange={(e) =>
                                                handleInputChange('telegramID', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {/* City */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Город, в котором работаю">
                                        <Input
                                            width={360}
                                            autoComplete="Екатеринбург"
                                            size="large"
                                            name="department"
                                            value={inputValues.city}
                                            onChange={(e) =>
                                                handleInputChange('city', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {/* Address */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Адрес магазина, в котором работаю">
                                        <Input
                                            width={360}
                                            size="large"
                                            name="address"
                                            value={inputValues.address}
                                            onChange={(e) =>
                                                handleInputChange('address', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {/* New products */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Что необходимо добавить на полку магазина?">
                                        <TextArea
                                            autoSize
                                            placeholder="Напишите ваши варианты"
                                            size="large"
                                            name="newProduct"
                                            value={inputValues.newProduct}
                                            onChange={(e) =>
                                                handleInputChange('newProduct', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {width > 768 && (
                                        <Space>
                                            {/* Submit Button */}
                                            <Button
                                                onClick={handleSubmit}
                                                disabled={!isFormValid(inputValues)}
                                                htmlType="submit"
                                                style={{
                                                    background: !!isFormValid(inputValues)
                                                        ? '#73AE62'
                                                        : undefined,
                                                }}
                                                type="primary">
                                                Отправить
                                            </Button>

                                            {/* Cancel Button */}
                                            <Button onClick={() => router.back()}>Отменить</Button>
                                        </Space>
                                    )}
                                </div>

                                <div style={{ maxWidth: '100%' }} className={styles.inputLayout}>
                                    {/* Cause */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Почему это так важно?">
                                        <TextArea
                                            autoSize
                                            placeholder="Пример: гости часто просят, мне нравится"
                                            size="large"
                                            name="cause"
                                            value={inputValues.cause}
                                            onChange={(e) =>
                                                handleInputChange('cause', e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                    {/* Technical Specification Link */}
                                    <Form.Item
                                        name="url"
                                        required
                                        rules={[
                                            {
                                                type: 'url',
                                                warningOnly: true,
                                                message: 'Ссылка введена неверно',
                                            },
                                        ]}
                                        style={{ width: '100%' }}
                                        label="Фото, скриншоты товара или другие материалы">
                                        <Input
                                            width={360}
                                            size="large"
                                            placeholder="Фото, видео, документы"
                                            name="technicalSpecificationLink"
                                            value={inputValues.material}
                                            onChange={(e) =>
                                                handleInputChange('material', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {width <= 768 && (
                                        <Space>
                                            {/* Submit Button */}
                                            <Button
                                                onClick={handleSubmit}
                                                disabled={!isFormValid(inputValues)}
                                                htmlType="submit"
                                                style={{
                                                    background: !!isFormValid(inputValues)
                                                        ? '#73AE62'
                                                        : undefined,
                                                }}
                                                type="primary">
                                                Отправить
                                            </Button>

                                            {/* Cancel Button */}
                                            <Button onClick={() => router.back()}>Отменить</Button>
                                        </Space>
                                    )}
                                </div>
                            </div>
                        </Form>
                    </ConfigProvider>
                </section>
            </>
        </>
    );
};
