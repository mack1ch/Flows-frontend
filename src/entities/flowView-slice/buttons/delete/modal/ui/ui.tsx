'use client';
import styles from './ui.module.scss';
import { Button, ConfigProvider, Modal, ThemeConfig } from 'antd';
import { useState } from 'react';
import ModalCircle from '../../../../../../../public/assets/modalCircle-red.svg';
import Image from 'next/image';
import { deleteProposal } from '../../api';
import { useRouter } from 'next/navigation';
export const DeleteButtonModal = ({
    modalOpen = false,
    setModalOpen,
    flowID,
}: {
    modalOpen: boolean;
    flowID: number;
    setModalOpen: (arg: boolean) => void;
}) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const router = useRouter();
    const handleOk = async () => {
        setConfirmLoading(true);
        const res: undefined | Error = await deleteProposal(flowID);
        if (!(typeof res === 'undefined')) router.push('/flows/my');
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
            <Modal
                open={modalOpen}
                onOk={handleOk}
                footer={
                    <ConfigProvider theme={modalTheme}>
                        <Button onClick={handleCancel} key="back">
                            Оставить
                        </Button>
                        <Button
                            loading={confirmLoading}
                            onClick={handleOk}
                            key="submit"
                            type="primary">
                            Удалить
                        </Button>
                    </ConfigProvider>
                }
                onCancel={handleCancel}>
                <div className={styles.layout}>
                    <Image src={ModalCircle} width={22} height={22} alt="Предупреждение" />
                    <div className={styles.date}>
                        <p className={styles.title}>Вы уверены, что хотите удалить заявку?</p>
                        <p className={styles.text}>Восстановить заявку будет невозможно</p>
                    </div>
                </div>
            </Modal>
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
    },
};
