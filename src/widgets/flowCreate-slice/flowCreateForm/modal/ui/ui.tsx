'use client'
import styles from './ui.module.scss';
import { AutoComplete, Button, ConfigProvider, Modal, ThemeConfig } from 'antd';
import { useEffect, useState } from 'react';
import { getUserHeads } from '../api';
import { IUser } from '@/shared/interface/user';
import { getFullName, getUserIdByFullName } from '@/shared/lib/parse/user';

export const ConfirmModal = ({
    modalOpen = false,
    setModalOpen,
    handleSubmit,
    userArray,
    setUsersArray,
    setChoiceUserID
}: {
    modalOpen: boolean;
    setChoiceUserID: (userID: number) => void
    setModalOpen: (arg: boolean) => void;
    handleSubmit: () => void;
    setUsersArray: (users: IUser[]) => void;
    userArray: IUser[]
}) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    //   const [choiceUserID, setChoiceUserID] = useState<number>();
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const handleOk = () => {
        setConfirmLoading(true);
        setChoiceUserID(getUserIdByFullName(userArray, inputValue))
        handleSubmit();
        setTimeout(() => {
            setModalOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    useEffect(() =>{
        const GetUser = async () => {
            const fetchUsers: IUser[] | Error = await getUserHeads();
            if (fetchUsers instanceof Error) return
            else {
                setUsersArray(fetchUsers);
                setOptions(getFullName(fetchUsers))
            }
        };
        GetUser();
    },[])
    
    const handleCancel = () => {
        setModalOpen(false);
    };
    return (
        <>
            <Modal
                open={modalOpen}
                onOk={handleOk}
                footer={
                    <>
                        <ConfigProvider theme={modalRejectTheme}>
                            <Button onClick={handleCancel} key="back">
                                Оставить
                            </Button>
                        </ConfigProvider>
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
                        <p className={styles.title}>Отправить заявку на обработку</p>
                        <AutoComplete
                            value={inputValue}
                            options={options}
                            onChange={setInputValue}
                            placeholder="Согласующий"
                            style={{ width: '100%' }}
                            onSearch={(text) => setInputValue(text)}
                            size="large"
                        />
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

            colorPrimaryBg: ''
        },
    },
};

const modalRejectTheme: ThemeConfig = {
    components: {
        Button: {
            colorPrimaryTextHover: '#222',
            colorPrimaryHover: '#757575',
            colorPrimaryActive: '#757575',
        }
    }
}
