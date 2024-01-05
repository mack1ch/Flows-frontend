import {
    Button,
    Checkbox,
    ConfigProvider,
    Form,
    Input,
    Radio,
    RadioChangeEvent,
    Space,
    ThemeConfig,
} from 'antd';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { OtherTypeOfRadio, requestTypeData } from '../data/requestType';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { OtherDepartments, departmentsData } from '../data/departments';
const { TextArea } = Input;
export const FlowCreateForm = () => {
    const [formData] = Form.useForm();
    const [requestType, setRequestType] = useState<string | number | null>(null);
    const [departments, setDepartments] = useState<CheckboxValueType[] | undefined>(undefined);
    const [otherRequestTypeData, setOtherRequestTypeData] = useState<string>('');
    const [otherDepartmentsData, setOtherDepartmentsData] = useState<string>('');
    const [isButtonDisable, setButtonDisable] = useState(false);
    const formValues = Form.useWatch([], formData);
    useEffect(() => {
        formData.validateFields({ validateOnly: true }).then(
            () => {
                setButtonDisable(true);
            },
            () => {
                setButtonDisable(false);
            },
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues]);
    const onRequestTypeChange = (e: RadioChangeEvent) => {
        setRequestType(e.target.value);
    };

    return (
        <>
            <section className={styles.layout}>
                <ConfigProvider theme={flowFormTheme}>
                    <Form style={{ width: '100%' }} layout="vertical" form={formData}>
                        <div className={styles.formLayout}>
                            <div className={styles.inputLayout}>
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Название заявки">
                                    <Input width={360} size="large" />
                                </Form.Item>
                                <Form.Item style={{ width: '100%' }} required label="ФИО">
                                    <Input width={360} size="large" />
                                </Form.Item>
                                <Form.Item style={{ width: '100%' }} required label="ID в Telegram">
                                    <Input width={360} size="large" />
                                </Form.Item>
                                <Form.Item style={{ width: '100%' }} required label="Ваш отдел">
                                    <Input width={360} size="large" />
                                </Form.Item>
                                <Form.Item style={{ width: '100%' }} required label="Тип запроса:">
                                    <Radio.Group onChange={onRequestTypeChange} value={requestType}>
                                        <Space direction="vertical">
                                            {requestTypeData.map((item, index) => (
                                                <Radio key={index} value={item.value}>
                                                    {item.label}
                                                </Radio>
                                            ))}
                                            <Radio value={otherRequestTypeData}>
                                                <OtherTypeOfRadio
                                                    value={otherRequestTypeData}
                                                    onChange={setOtherRequestTypeData}
                                                />
                                            </Radio>
                                        </Space>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item style={{ width: '100%' }} required label="Цель проекта">
                                    <TextArea
                                        autoSize
                                        placeholder="Какую проблему решаем запуском этого проекта?"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Какую выгоду несет реализация проекта в деньгах?">
                                    <TextArea
                                        autoSize
                                        placeholder="Напишите здесь всё про деньги, ваши расчеты и итоги"
                                        size="large"
                                    />
                                </Form.Item>

                                <Space>
                                    <Button
                                        disabled={!isButtonDisable}
                                        htmlType="submit"
                                        style={{
                                            background: !!isButtonDisable ? '#73AE62' : undefined,
                                        }}
                                        type="primary">
                                        Отправить
                                    </Button>
                                    <Button>Отменить</Button>
                                </Space>
                            </div>
                            <div style={{ maxWidth: '100%' }} className={styles.inputLayout}>
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Какие смежные отделы затрагивает ваш проект/запрос?">
                                    <Checkbox.Group value={departments} onChange={setDepartments}>
                                        <Space direction="vertical">
                                            {departmentsData.map((item, index) => (
                                                <Checkbox key={index} value={item.value}>
                                                    {item.label}
                                                </Checkbox>
                                            ))}
                                            <OtherDepartments
                                                value={otherDepartmentsData}
                                                onChange={setOtherDepartmentsData}
                                            />
                                        </Space>
                                    </Checkbox.Group>
                                </Form.Item>
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Есть ли какие-либо ограничивающие факторы?">
                                    <TextArea
                                        autoSize
                                        placeholder="Например, если вышло новое законодательство и по нему есть строгие временные рамки"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Как ваш проект/запрос поможет достичь развитие формата и покрытие регионов магазинами?">
                                    <TextArea autoSize size="large" />
                                </Form.Item>
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Ссылка на техническое задание">
                                    <Input width={360} size="large" />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </ConfigProvider>
            </section>
        </>
    );
};
const flowFormTheme: ThemeConfig = {
    components: {
        Input: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        },
        Radio: {
            colorPrimary: '#73AE62',
        },
        Button: {
            colorPrimaryHover: '#73AE62',
            colorPrimaryActive: '#73AE62',
        },
        Checkbox: {
            colorPrimary: '#73AE62',
            colorPrimaryHover: '#538A1B',
        },
    },
};
