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
import { ICreateCommerceForm } from '@/shared/interface/flowsCreateForm';
import { getAuthUser } from '../api/getAuthUser';
import { IUser } from '@/shared/interface/user';
import { getUserFIO } from '@/shared/lib/parse/user';
import { RequestFields, checkboxFlowTargetValues } from '../data';
import { isNonEmptyArray } from '../model';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { IFlowCategory } from '@/shared/interface/flow';
import { getFlowCategories } from '../api/getFlowType';
import { isURL } from '@/shared/lib/parse/link';
import { createFlow } from '../api/createFlow';

const { TextArea } = Input;

export const FlowCommerceForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [formData] = Form.useForm();
    const { width, height } = useWindowSize();
    const [flowCategories, setFlowCategories] = useState<IFlowCategory[]>([] as IFlowCategory[]);
    const router = useRouter();
    const [authUser, setAuthUser] = useState<IUser>({} as IUser);
    const [inputValues, setInputValues] = useState<ICreateCommerceForm>({
        title: '',
        flowType: null,
        description: '',
        flowTarget: undefined,
        city: '',
        address: '',
        material: '',
        problem: '',
    });

    // Запрос на получение данных о пользователе и типе заявки
    useEffect(() => {
        const fetchData = async () => {
            const fetchUser = await getAuthUser();
            if (!(fetchUser instanceof Error)) {
                setAuthUser(fetchUser);
            }

            const fetchCategories = await getFlowCategories();
            if (!(fetchCategories instanceof Error)) {
                setFlowCategories(fetchCategories);
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
    const isFormValid = (values: Partial<ICreateCommerceForm>): boolean => {
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

    // Изменение Checkboxes для целей заявки
    const onCheckBoxChange = (list: CheckboxValueType[]) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            flowTarget: list,
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
                                    {/* Title */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Название заявки">
                                        <Input
                                            width={360}
                                            size="large"
                                            name="title"
                                            value={inputValues.title}
                                            onChange={(e) =>
                                                handleInputChange('title', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {/* Full Name */}
                                    <Form.Item style={{ width: '100%' }} required label="ФИО">
                                        <Input
                                            width={360}
                                            size="large"
                                            name="fullName"
                                            disabled
                                            value={getUserFIO(authUser)}
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
                                            value={authUser.telegram}
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
                                            name="department"
                                            value={inputValues.address}
                                            onChange={(e) =>
                                                handleInputChange('address', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {/* Request Type */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Тип запроса:">
                                        <Radio.Group
                                            onChange={onRequestTypeChange}
                                            value={inputValues.flowType}>
                                            <Space direction="vertical">
                                                {flowCategories.map((item) => (
                                                    <Radio key={item.id} value={item.id}>
                                                        {item.name}
                                                    </Radio>
                                                ))}
                                            </Space>
                                        </Radio.Group>
                                    </Form.Item>
                                    {/* Project discription */}
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Описание проекта">
                                        <TextArea
                                            autoSize
                                            placeholder="Напишите краткое описание вашего проекта"
                                            size="large"
                                            name="description"
                                            value={inputValues.description}
                                            onChange={(e) =>
                                                handleInputChange('description', e.target.value)
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
                                    {/* flowTargets */}
                                    <Form.Item
                                        required
                                        style={{ width: '100%' }}
                                        label="Цель предложенного проекта">
                                        <Checkbox.Group
                                            value={inputValues.flowTarget}
                                            onChange={onCheckBoxChange}>
                                            <Space direction="vertical">
                                                {checkboxFlowTargetValues.map((item, index) => (
                                                    <Checkbox
                                                        style={{ userSelect: 'none' }}
                                                        key={index}
                                                        value={item}>
                                                        {item}
                                                    </Checkbox>
                                                ))}
                                            </Space>
                                        </Checkbox.Group>
                                    </Form.Item>

                                    {/* FlowResolveProblem */}
                                    <Form.Item
                                        required
                                        style={{ width: '100%' }}
                                        label="Какая проблема решается этим проектом?">
                                        <TextArea
                                            autoSize
                                            placeholder="Жалобы клиентов, неавтоматизированный процесс, собственный опыт"
                                            size="large"
                                            name="description"
                                            value={inputValues.problem}
                                            onChange={(e) =>
                                                handleInputChange('problem', e.target.value)
                                            }
                                        />
                                    </Form.Item>

                                    {/* Technical Specification Link */}
                                    <Form.Item
                                        name="url"
                                        rules={[
                                            {
                                                type: 'url',
                                                warningOnly: true,
                                                message: 'Ссылка введена неверно',
                                            },
                                        ]}
                                        style={{ width: '100%' }}
                                        label="Ссылка на материалы">
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
