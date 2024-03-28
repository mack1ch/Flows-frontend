'use client';

import { Button, ConfigProvider, Form, Input, Select } from 'antd';
import styles from './ui.module.scss';
import { regFormTheme } from '../theme';
import { filterOption } from '../model';
import { useEffect, useState } from 'react';
import { IDepartment, IJob } from '@/shared/interface/user';
import { getDepartments } from '../api/getDepartments';
import { getJobs } from '../api/getJobs';
import { useWindowSize } from '@/shared/hooks/useWindowSize';

export const RegForm = () => {
    const [departments, setDepartments] = useState<IDepartment[]>();
    const [jobs, setJobs] = useState<IJob[]>();
    const { width, height } = useWindowSize();
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
        };
        fetchData();
    }, []);

    return (
        <>
            <section className={styles.form}>
                <ConfigProvider theme={regFormTheme}>
                    <Form className={styles.antForm} style={{ width: '100%' }} layout="vertical">
                        <div className={styles.formLayout}>
                            <Form.Item style={{ width: '100%' }} required label="ФИО">
                                <Input
                                    placeholder="Например: Степанов Дмитрий Андреевич"
                                    width={360}
                                    size="large"
                                    name="FIO"
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="Электронная почта">
                                <Input
                                    placeholder="Например: lifemart@yandex.ru"
                                    width={360}
                                    size="large"
                                    name="email"
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="Номер телефона">
                                <Input
                                    count={{
                                        show: true,
                                        max: 11,
                                    }}
                                    placeholder="Например: 7 (999) 999-99-99"
                                    width={360}
                                    size="large"
                                    type="number"
                                    name="dateOfBirth"
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="Дата рождения">
                                <Input width={360} size="large" type="date" name="dateOfBirth" />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required label="ID в Telegram ">
                                <Input
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
                                    placeholder="Выберите должность"
                                    options={jobs?.map((item) => ({
                                        value: item.id.toString(),
                                        label: item.name,
                                    }))}
                                />
                            </Form.Item>
                            <Button size="middle" htmlType="submit">
                                Отправить
                            </Button>
                        </div>
                    </Form>
                </ConfigProvider>
            </section>
        </>
    );
};
