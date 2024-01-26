'use client'
import styles from './ui.module.scss';
import { Button, ConfigProvider, Divider, Form, Input, InputRef, Modal, Tag, ThemeConfig } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { IFlow } from '@/shared/interface/flow';
import TextArea from 'antd/es/input/TextArea';

// TODO: поменять
const DelteIconSvg = () => {
    return (<>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M10.125 2.25H8.25V1.875C8.25 1.57663 8.13147 1.29048 7.9205 1.0795C7.70952 0.868526 7.42337 0.75 7.125 0.75H4.875C4.57663 0.75 4.29048 0.868526 4.0795 1.0795C3.86853 1.29048 3.75 1.57663 3.75 1.875V2.25H1.875C1.77554 2.25 1.68016 2.28951 1.60984 2.35984C1.53951 2.43016 1.5 2.52554 1.5 2.625C1.5 2.72446 1.53951 2.81984 1.60984 2.89016C1.68016 2.96049 1.77554 3 1.875 3H2.25V9.75C2.25 9.94891 2.32902 10.1397 2.46967 10.2803C2.61032 10.421 2.80109 10.5 3 10.5H9C9.19891 10.5 9.38968 10.421 9.53033 10.2803C9.67098 10.1397 9.75 9.94891 9.75 9.75V3H10.125C10.2245 3 10.3198 2.96049 10.3902 2.89016C10.4605 2.81984 10.5 2.72446 10.5 2.625C10.5 2.52554 10.4605 2.43016 10.3902 2.35984C10.3198 2.28951 10.2245 2.25 10.125 2.25ZM4.5 1.875C4.5 1.77554 4.53951 1.68016 4.60984 1.60984C4.68016 1.53951 4.77554 1.5 4.875 1.5H7.125C7.22446 1.5 7.31984 1.53951 7.39017 1.60984C7.46049 1.68016 7.5 1.77554 7.5 1.875V2.25H4.5V1.875ZM9 9.75H3V3H9V9.75ZM5.25 4.875V7.875C5.25 7.97446 5.21049 8.06984 5.14016 8.14017C5.06984 8.21049 4.97446 8.25 4.875 8.25C4.77554 8.25 4.68016 8.21049 4.60984 8.14017C4.53951 8.06984 4.5 7.97446 4.5 7.875V4.875C4.5 4.77554 4.53951 4.68016 4.60984 4.60984C4.68016 4.53951 4.77554 4.5 4.875 4.5C4.97446 4.5 5.06984 4.53951 5.14016 4.60984C5.21049 4.68016 5.25 4.77554 5.25 4.875ZM7.5 4.875V7.875C7.5 7.97446 7.46049 8.06984 7.39017 8.14017C7.31984 8.21049 7.22446 8.25 7.125 8.25C7.02554 8.25 6.93016 8.21049 6.85983 8.14017C6.78951 8.06984 6.75 7.97446 6.75 7.875V4.875C6.75 4.77554 6.78951 4.68016 6.85983 4.60984C6.93016 4.53951 7.02554 4.5 7.125 4.5C7.22446 4.5 7.31984 4.53951 7.39017 4.60984C7.46049 4.68016 7.5 4.77554 7.5 4.875Z" fill="white" />
        </svg></>)

}

export const ApproveModal = ({
    modalOpen = false,
    setModalOpen,
    postData
}: {
    modalOpen: boolean;
    postData: IFlow;
    setModalOpen: (arg: boolean) => void;

}) => {
    const [inputTagValue, setInputTagValue] = useState<string>('');
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);
    const [form] = Form.useForm();
    const [tags, setTags] = useState<string[]>([] as string[]);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setModalOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setModalOpen(false);
    };

    const handleInputConfirm = () => {

        if (inputTagValue && !tags.includes(inputTagValue)) {
            setTags([...tags, inputTagValue]);
        }

        setInputTagValue('');
    };

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);
    const handleClose = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };
    const tagStyles: React.CSSProperties = {
        padding: '4px 8px',
        background: '#449429',
        userSelect: 'none',
        color: '#fff',
    };
    console.log(postData);
    return (
        <>
            <Modal
                open={modalOpen}
                onOk={handleOk}
                footer={
                    <>
                        <ConfigProvider theme={modalTheme}>
                            <Button
                                loading={confirmLoading}
                                onClick={handleOk}
                                key="submit"
                            >
                                Отправить
                            </Button>
                        </ConfigProvider>
                    </>
                }
                onCancel={handleCancel}>
                <ConfigProvider theme={modalTheme}>
                    <div className={styles.layout}>
                        <header className={styles.header}>
                            <h2 className={styles.header__title}>Публикация заявки в ленту</h2>
                        </header>
                        <Divider />
                        <Form style={{ width: '100%' }} layout="vertical" form={form} className={styles.main}>
                            <Form.Item style={{ width: '100%' }} required label="Название">
                                <TextArea
                                    autoSize
                                    size="large"
                                    name="department"
                                    disabled
                                    defaultValue={postData?.name}
                                    value={(postData?.name) || 'Загрузка...'}
                                />
                            </Form.Item>
                            <Form.Item style={{ width: '100%' }} required tooltip="Ключевые слова вашего проекта, обозначение темы или смысла" label="Ключевые теги">
                                <Input
                                    width={360}
                                    size="large"
                                    name="department"
                                    ref={inputRef}
                                    type="text"
                                    value={inputTagValue}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputTagValue(e.target.value)}
                                    onBlur={handleInputConfirm}
                                    onPressEnter={handleInputConfirm}
                                />
                            </Form.Item>
                        </Form>
                        {tags.map((tag, index) => {
                            return (
                                <Tag
                                    closeIcon={<DelteIconSvg />}
                                    key={tag}
                                    closable={index !== 0}
                                    style={tagStyles}
                                    onClose={() => handleClose(tag)}
                                >#{tag}</Tag>
                            );
                        })}
                    </div>
                </ConfigProvider>
            </Modal>
        </>
    );
};
const modalTheme: ThemeConfig = {
    components: {
        Select: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        },
        Dropdown: {
            colorPrimary: '#449429',
            controlItemBgActive: '#D6ECDB',
            controlItemBgActiveHover: '#D6ECDB ',
        },
        Button: {
            defaultBg: '#73AE62',
            colorText: '#fff',
            colorBorder: '#73AE62',
            colorPrimaryHover: '#ebebeb',
            colorPrimaryActive: '#ebebeb',
        },
        Input: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        },
    },
};
