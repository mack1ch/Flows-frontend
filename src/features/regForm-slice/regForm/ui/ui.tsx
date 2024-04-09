'use client';

import { Button, ConfigProvider, DatePickerProps, Form, Input, message, Select } from 'antd';
import styles from './ui.module.scss';
import { regFormTheme } from '../theme';

import { useEffect, useState } from 'react';
import { IDepartment, IJob, IUser } from '@/shared/interface/user';
import { getDepartments } from '../api/getDepartments';
import { getJobs } from '../api/getJobs';
import { prefixSelector } from '../model';
import { ICompany } from '@/shared/interface/company';
import { getCompany } from '../api/getCompany';
import { IUserRegister } from '../iterface';
import { isNonEmptyArray } from '@/shared/lib/check/emptyaArray';
import { RequestFields } from '../data';
import { postUser } from '../api/postUser';
import { useRouter } from 'next/navigation';
import { splitFullName } from '@/shared/lib/parse/user';

export const RegForm = ({ id }: { id: number }) => {
    const [departments, setDepartments] = useState<IDepartment[]>();
    const [jobs, setJobs] = useState<IJob[]>();
    const [formData] = Form.useForm();
    const [company, setCompany] = useState<ICompany>();
    const router = useRouter();
    const [inputValues, setInputValues] = useState<IUserRegister>({
        firstname: '',
        surname: '',
        lastname: '',
        email: '',
        phone: '',
        department: undefined,
        job: undefined,
        birthday: '',
        telegram: '',
        role: 'member',
        company: company?.id,
        fio: '',
    });

    const isFormValid = (values: Partial<IUserRegister>): boolean => {
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

    useEffect(() => {
        const fetchData = async () => {
            const fetchDepartments = await getDepartments();
            if (!(fetchDepartments instanceof Error)) {
                setDepartments(fetchDepartments);
            }
            const fetchJobs = await getJobs();
            if (!(fetchJobs instanceof Error)) {
                setJobs(fetchJobs);
            }
            const fetchCompany: ICompany | Error = await getCompany(id);
            if (!(fetchCompany instanceof Error)) {
                setCompany(fetchCompany);
            }
        };
        fetchData();
    }, [id]);
    const handleInputChange = (name: string, value: string | number | null) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
            company: company?.id,
        }));
    };
    const handleRegister = async () => {
        try {
            const res = await postUser(inputValues);
            if (res instanceof Error) {
                message.open({
                    type: 'error',
                    content: 'Поля введены неверно, проверьте правильность введенных данных',
                });

                return;
            } else {
                router.push('/auth');
            }
        } catch {
            message.open({
                type: 'error',
                content: 'Ошибка на сервере. Наши разработчики уже работают над устранением',
            });
        }
    };

    if (!company) return;
    return (
        <>
            <section className={styles.form}>
                <ConfigProvider theme={regFormTheme}>
                    <Form
                        form={formData}
                        className={styles.antForm}
                        style={{ width: '100%' }}
                        layout="vertical">
                        <div className={styles.formLayout}>
                            <Form.Item style={{ width: '100%' }} required label="ФИО">
                                <Input
                                    placeholder="Например: Степанов Дмитрий Андреевич"
                                    width={360}
                                    size="large"
                                    name="FIO"
                                    value={inputValues.fio}
                                    onChange={(e) => handleInputChange('fio', e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="Электронная почта">
                                <Input
                                    placeholder="Например: lifemart@yandex.ru"
                                    width={360}
                                    size="large"
                                    name="email"
                                    value={inputValues.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="Номер телефона">
                                <Input
                                    addonBefore={prefixSelector}
                                    count={{
                                        show: true,
                                        max: 10,
                                    }}
                                    placeholder="Например: +7 (999) 999-99-99"
                                    width={360}
                                    size="large"
                                    type="number"
                                    name="dateOfBirth"
                                    value={inputValues.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="Дата рождения">
                                <Input
                                    onChange={(e) => handleInputChange('birthday', e.target.value)}
                                    width={360}
                                    size="large"
                                    type="date"
                                    name="dateOfBirth"
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="ID в Telegram ">
                                <Input
                                    value={inputValues.telegram}
                                    onChange={(e) => handleInputChange('telegram', e.target.value)}
                                    placeholder="В формате @username"
                                    width={360}
                                    size="large"
                                    name="telegram"
                                />
                            </Form.Item>
                            <Form.Item
                                style={{ width: '100%' }}
                                required
                                label="Отдел, в котором работаю">
                                <Select
                                    size="large"
                                    onChange={(e) => handleInputChange('department', e)}
                                    showSearch
                                    placeholder="Выберите отдел"
                                    options={departments?.map((item) => ({
                                        value: item.id.toString(),
                                        label: item.name,
                                    }))}
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="Должность">
                                <Select
                                    size="large"
                                    showSearch
                                    onChange={(e) => handleInputChange('job', e)}
                                    placeholder="Выберите должность"
                                    options={jobs?.map((item) => ({
                                        value: item.id.toString(),
                                        label: item.name,
                                    }))}
                                />
                            </Form.Item>
                            <Button
                                onClick={handleRegister}
                                disabled={!isFormValid(inputValues)}
                                style={{ width: '100%' }}
                                size="large"
                                type="primary"
                                htmlType="submit">
                                Зарегистрироваться
                            </Button>
                        </div>
                    </Form>
                </ConfigProvider>
            </section>
        </>
    );
};
