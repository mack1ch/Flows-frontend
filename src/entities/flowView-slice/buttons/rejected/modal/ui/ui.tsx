'use client';
import styles from './ui.module.scss';
import { Button, ConfigProvider, Form, Input, Modal, ThemeConfig } from 'antd';
import { useState } from 'react';
import ModalCircle from '../../../../../../../public/assets/modalCircle-red.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { rejectedFlow } from '../../api';
import { IFlow } from '@/shared/interface/flow';

const { TextArea } = Input;

export const RejectedButtonModal = ({
    modalOpen = false,
    setModalOpen,
    flowID,
}: {
    modalOpen: boolean;
    flowID: number;
    setModalOpen: (arg: boolean) => void;
}) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [comment, setComment] = useState<string>('');
    const router = useRouter();
    const handleOk = async () => {
        setConfirmLoading(true);
        const res: IFlow | Error = await rejectedFlow(flowID, comment);

        if (res instanceof Error) return;
        else {
            setComment('');
            router.push('/flows/my');
        }
        setTimeout(() => {
            setModalOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setModalOpen(false);
    };
    return (
        <>
            <ConfigProvider theme={modalTheme}>
                <Modal
                    open={modalOpen}
                    onOk={handleOk}
                    footer={
                        <>
                            <Button onClick={handleCancel} key="back">
                                Оставить
                            </Button>
                            <Button
                                loading={confirmLoading}
                                onClick={handleOk}
                                key="submit"
                                type="primary">
                                Отклонить
                            </Button>
                        </>
                    }
                    onCancel={handleCancel}>
                    <div className={styles.layout}>
                        <Image src={ModalCircle} width={22} height={22} alt="Предупреждение" />
                        <Form style={{ width: '100%' }} layout="vertical">
                            <Form.Item style={{ width: '100%' }} required>
                                <h3 style={{ marginBottom: '16px' }} className={styles.h3}>
                                    Причина отклонения
                                </h3>
                                <TextArea
                                    autoSize
                                    size="large"
                                    name="rejected"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </ConfigProvider>
        </>
    );
};
const modalTheme: ThemeConfig = {
    components: {
        Button: {
            colorPrimary: '#449429',
            colorPrimaryText: '#fff',
            colorPrimaryHover: '#73AE62',
            colorPrimaryActive: '#73AE62',
        },
        Input: {
            colorPrimaryHover: '#73AE62',
            colorPrimary: '#73AE62',
        },
    },
};
