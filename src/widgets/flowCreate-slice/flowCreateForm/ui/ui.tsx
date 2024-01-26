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
    message,
} from 'antd';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { createFlow } from '../api/postFlows';
import { ConfirmModal } from '../modal';
import { ICreateFlow } from '@/shared/interface/flowsCreateForm';
import { getCategoryNameById, isNonEmptyArray } from '../model';
import { IFlowCategory } from '@/shared/interface/flow';
import { getFlowCategories, } from '../api/getFlowCategories';
import { IDivision } from '@/shared/interface/company';
import { getAllDivisions } from '../api/getDivisions';
import { IUser } from '@/shared/interface/user';
import { getAuthUser } from '../api/getUser';
import { useRouter } from 'next/navigation';

const { TextArea } = Input;

export const FlowCreateForm = ({ isFullFormat = false }: { isFullFormat?: boolean }) => {
    const router = useRouter();
    const [formData] = Form.useForm();
    const [authUser, setAuthUser] = useState<IUser>({} as IUser)
    const [isButtonDisable, setButtonDisable] = useState(false);
    const { width, height } = useWindowSize();
    const [choiceUserID, setChoiceUserID] = useState<number>(0);
    const [usersArray, setUserArray] = useState<IUser[]>([] as IUser[]);
    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage()
    const [flowCategories, setFlowCategories] = useState<IFlowCategory[]>([] as IFlowCategory[]);
    const [allDivisions, setDivisions] = useState<IDivision[]>([] as IDivision[]);
    const [inputValues, setInputValues] = useState<ICreateFlow>({
        title: '',
        requestType: null,
        projectGoal: '',
        financialBenefit: '',
        relatedDepartments: [] as CheckboxValueType[],
        limitingFactors: '',
        technicalSpecificationLink: '',
        description: '',
        user_to: null,
        effects: '',
    });

    const onRequestTypeChange = (e: RadioChangeEvent) => {
        handleInputChange('requestType', e.target.value);
    };
    const isFormValid = () => {
        const requiredFields: (keyof ICreateFlow)[] = isFullFormat
            ? ['title', 'requestType', 'projectGoal', 'financialBenefit', 'relatedDepartments', 'limitingFactors', 'technicalSpecificationLink', 'description', 'effects']
            : ['title', 'requestType', 'description', 'effects', 'relatedDepartments', 'financialBenefit', 'technicalSpecificationLink'];

        for (const fieldName of requiredFields) {
            const fieldValue = inputValues[fieldName];
            if (!fieldValue || (Array.isArray(fieldValue) && !isNonEmptyArray(fieldValue))) {
                return false;
            }
        }
        return true;
    };
    useEffect(() => {
        const GetFlowCategories = async () => {
            const fetchCategories: IFlowCategory[] | Error = await getFlowCategories();
            if (fetchCategories instanceof Error) return
            else {
                setFlowCategories(fetchCategories)
            }
        };
        const GetAllDivisions = async () => {
            const fetchDivisions: IDivision[] | Error = await getAllDivisions();
            if (fetchDivisions instanceof Error) return
            else {
                setDivisions(fetchDivisions);
            }
        };
        const GetUser = async () => {
            const fetchUser: IUser | Error = await getAuthUser();
            if (fetchUser instanceof Error) return
            else {
                setAuthUser(fetchUser);
                setInputValues((prevValues) => ({
                    ...prevValues,
                    fullName: authUser.lastname + ' ' + authUser.firstname + ' ' + authUser.surname,
                    telegramId: authUser.telegram,
                }))
            }
        };
        GetUser();
        GetAllDivisions();
        GetFlowCategories();
    }, [])
    const handleInputChange = (name: string, value: string | number | CheckboxValueType[] | null) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        isFormValid() ? setButtonDisable(true) : setButtonDisable(false);
    };
    const handleSubmit = async () => {
        try {
            const res = await createFlow(inputValues, choiceUserID, getCategoryNameById(inputValues.requestType, flowCategories), isFullFormat);
            if (!(res instanceof Error)) router.push('/flows/my')
            else throw new Error;
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Ошибка на сервере, мы уже работаем над устранением',
            });
        }
    }



    return (
        <>
            {contextHolder}
            <ConfirmModal setChoiceUserID={setChoiceUserID} userArray={usersArray} setUsersArray={setUserArray} handleSubmit={handleSubmit} modalOpen={isConfirmModalOpen} setModalOpen={setConfirmModalOpen} />
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
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                    />
                                </Form.Item>

                                {/* Full Name */}
                                <Form.Item style={{ width: '100%' }} required label="ФИО">
                                    <Input
                                        width={360}
                                        size="large"
                                        disabled
                                        name="fullName"
                                        defaultValue={authUser.lastname + ' ' + authUser.firstname + ' ' + authUser.surname}
                                        value={(authUser.lastname + ' ' + authUser.firstname + ' ' + authUser.surname) || 'Загрузка...'}
                                    />
                                </Form.Item>

                                {/* Telegram ID */}
                                <Form.Item style={{ width: '100%' }} required label="ID в Telegram">
                                    <Input
                                        width={360}
                                        size="large"
                                        disabled
                                        name="telegramId"
                                        defaultValue={authUser.telegram}
                                        value={(authUser.telegram) || 'Загрузка...'}

                                    />
                                </Form.Item>

                                {/* Department */}
                                <Form.Item style={{ width: '100%' }} required label="Ваш отдел">
                                    <Input
                                        width={360}
                                        size="large"
                                        name="department"
                                        disabled
                                        defaultValue={authUser?.division}
                                        value={(authUser?.division) || 'Загрузка...'}
                                    />
                                </Form.Item>

                                {/* Request Type */}
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Тип запроса:">
                                    <Radio.Group onChange={onRequestTypeChange} value={inputValues.requestType}>
                                        <Space direction="vertical">
                                            {flowCategories.map((item) => (
                                                <Radio key={item.id} value={item.id}>
                                                    {item.name}
                                                </Radio>
                                            ))}
                                        </Space>
                                    </Radio.Group>
                                </Form.Item>

                                {/* Project Goal */}
                                {isFullFormat &&
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Цель проекта">
                                        <TextArea
                                            autoSize
                                            placeholder="Какую проблему решаем запуском этого проекта?"
                                            size="large"
                                            name="projectGoal"
                                            value={inputValues.projectGoal}
                                            onChange={(e) => handleInputChange('projectGoal', e.target.value)}
                                        />
                                    </Form.Item>
                                }
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
                                        onChange={(e) => handleInputChange('description', e.target.value)}
                                    />
                                </Form.Item>

                                {/* Project effects */}
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Как ваш проект позволит достичь цели компании?">
                                    <TextArea
                                        autoSize
                                        placeholder="Напишите здесь какие эффекты будут от вашего проекта"
                                        size="large"
                                        name="effects"
                                        value={inputValues.effects}
                                        onChange={(e) => handleInputChange('effects', e.target.value)}
                                    />
                                </Form.Item>

                                {width > 768 && (
                                    <Space>
                                        {/* Submit Button */}
                                        <Button
                                            onClick={() => setConfirmModalOpen(true)}
                                            disabled={!isButtonDisable}
                                            htmlType="submit"
                                            style={{
                                                background: !!isButtonDisable
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
                                {/* Related Departments */}
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Какие смежные отделы затрагивает ваш проект/запрос?">
                                    <Checkbox.Group
                                        value={inputValues.relatedDepartments}
                                        onChange={(values) => handleInputChange('relatedDepartments', values)}
                                    >
                                        <Space direction="vertical">
                                            {allDivisions.map((item, index) => (
                                                <Checkbox key={item.id} value={item.id}>
                                                    {item.name}
                                                </Checkbox>
                                            ))}
                                        </Space>
                                    </Checkbox.Group>
                                </Form.Item>
                                {/* Financial benefit */}
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Какую выгоду несет реализация проекта?">
                                    <TextArea
                                        autoSize
                                        placeholder="Напишите здесь всё про деньги, ваши расчеты и итоги"
                                        size="large"
                                        name="financialBenefit"
                                        value={inputValues.financialBenefit}
                                        onChange={(e) => handleInputChange('financialBenefit', e.target.value)}
                                    />
                                </Form.Item>
                                {/* Limiting Factors */}
                                {isFullFormat &&
                                    <Form.Item
                                        style={{ width: '100%' }}
                                        required
                                        label="Есть ли какие-либо ограничивающие факторы?">
                                        <TextArea
                                            autoSize
                                            placeholder="Например, если вышло новое законодательство и по нему есть строгие временные рамки"
                                            size="large"
                                            name="limitingFactors"
                                            value={inputValues.limitingFactors}
                                            onChange={(e) => handleInputChange('limitingFactors', e.target.value)}
                                        />
                                    </Form.Item>
                                }
                                {/* Technical Specification Link */}
                                <Form.Item
                                    style={{ width: '100%' }}
                                    required
                                    label="Ссылка на техническое задание">
                                    <Input
                                        width={360}
                                        size="large"
                                        name="technicalSpecificationLink"
                                        value={inputValues.technicalSpecificationLink}
                                        onChange={(e) => handleInputChange('technicalSpecificationLink', e.target.value)}
                                    />
                                </Form.Item>

                                {/* Technical Specification Link */}
                                <Button size='middle'>Сгенерировать с помощью ИИ</Button>

                                {width <= 768 && (
                                    <Space>
                                        {/* Submit Button */}
                                        <Button
                                            onClick={() => setConfirmModalOpen(true)}
                                            disabled={!isButtonDisable}
                                            htmlType="submit"
                                            style={{
                                                background: !!isButtonDisable
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
