'use client';

import { IFlow, IFlowStatus } from '@/shared/interface/flow';

import styles from './ui.module.scss';
import React, { useEffect, useState } from 'react';
import { DeleteButton } from '@/entities/flowView-slice/buttons/delete';
import { DownloadButton } from '@/entities/flowView-slice/buttons/download';
import { CommentButton } from '@/entities/flowView-slice/buttons/coment';
import { IDepartment, IUser } from '@/shared/interface/user';
import { getAuthUserData, getDepartments, getFlowByID } from '../api';
import { ApproveButton } from '@/entities/flowView-slice/buttons/approve';
import { InWorkButton } from '@/entities/flowView-slice/buttons/inWork';
import { ToDoneButton } from '@/entities/flowView-slice/buttons/toDone';
import { RejectedButton } from '@/entities/flowView-slice/buttons/rejected';
import { BacklogButton } from '@/entities/flowView-slice/buttons/backlog';
import { DepartmentModal } from '../departmentModal';
import { Button, ConfigProvider, ThemeConfig } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
export const FlowManagement = ({
    flowStatus,
    flowID = 0,
}: {
    flowStatus?: IFlowStatus;
    flowID?: number;
}) => {
    const statusType = flowStatus?.statusType;
    const [authUser, setAuthUser] = useState<IUser | null>({} as IUser);
    const [departments, setDepartments] = useState<IDepartment[]>();
    const [flow, setFlow] = useState<IFlow>();
    const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState<boolean>(false);
    useEffect(() => {
        const GetUserAndDepartments = async () => {
            const fetchUser: IUser | Error = await getAuthUserData();
            const fetchDepartments = await getDepartments();
            const fetchFlow = await getFlowByID(flowID);
            if (
                fetchUser instanceof Error ||
                fetchDepartments instanceof Error ||
                fetchFlow instanceof Error
            )
                return;
            else {
                setDepartments(fetchDepartments);
                setAuthUser(fetchUser);
                setFlow(fetchFlow);
            }
        };
        GetUserAndDepartments();
    }, []);

    const isModerator =
        !!authUser && authUser.role?.name === 'moderator'
            ? true
            : !!authUser && authUser.role?.name === 'member'
            ? false
            : undefined;

    return (
        <>
            <DepartmentModal
                flow={flow}
                departments={departments}
                isOpen={isDepartmentModalOpen}
                setIsOpen={setIsDepartmentModalOpen}
            />
            <section className={styles.layout}>
                {statusType === 'proposalApproved' ? (
                    <>
                        <ConfigProvider theme={buttonTheme}>
                            {isModerator && (
                                <Button
                                    icon={<UsergroupAddOutlined />}
                                    type="text"
                                    size="large"
                                    onClick={() => setIsDepartmentModalOpen(true)}>
                                    Назначить ответственного
                                </Button>
                            )}
                        </ConfigProvider>
                        <CommentButton flowID={flowID} />
                        {isModerator && <InWorkButton flowID={flowID} />}
                        {isModerator && <DeleteButton flowID={flowID} />}
                        <DownloadButton flowID={flowID} />
                    </>
                ) : statusType === 'proposalInWork' ? (
                    <>
                        <ConfigProvider theme={buttonTheme}>
                            {isModerator && (
                                <Button
                                    icon={<UsergroupAddOutlined />}
                                    type="text"
                                    size="large"
                                    onClick={() => setIsDepartmentModalOpen(true)}>
                                    Назначить ответственного
                                </Button>
                            )}
                        </ConfigProvider>
                        <CommentButton flowID={flowID} />
                        {isModerator && <ToDoneButton flowID={flowID} />}
                        {isModerator && <DeleteButton flowID={flowID} />}
                        <DownloadButton flowID={flowID} />
                    </>
                ) : statusType === 'proposalRejected' || statusType === 'proposalDone' ? (
                    <>
                        <DownloadButton flowID={flowID} />
                    </>
                ) : statusType === 'proposalInApprove' || statusType === 'proposalNeedRevision' ? (
                    <>
                        <ConfigProvider theme={buttonTheme}>
                            {isModerator && (
                                <Button
                                    icon={<UsergroupAddOutlined />}
                                    type="text"
                                    size="large"
                                    onClick={() => setIsDepartmentModalOpen(true)}>
                                    Назначить ответственного
                                </Button>
                            )}
                        </ConfigProvider>
                        {isModerator && <ApproveButton flowID={flowID} />}
                        {isModerator && <BacklogButton flowID={flowID} />}
                        <CommentButton flowID={flowID} />
                        {isModerator && <RejectedButton flowID={flowID} />}
                        <DownloadButton flowID={flowID} />
                    </>
                ) : statusType === 'proposalInBacklog' ? (
                    <>
                        {isModerator && <ApproveButton flowID={flowID} />}
                        <DownloadButton flowID={flowID} />
                        <CommentButton flowID={flowID} />
                        {isModerator && <DeleteButton flowID={flowID} />}
                    </>
                ) : null}
            </section>
        </>
    );
};

const buttonTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#4FC266',
        },
    },
};
