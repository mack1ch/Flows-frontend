'use client';


import { IFlowStatus } from '@/shared/interface/flow';

import styles from './ui.module.scss';
import React, { useEffect, useState } from 'react';
import { ChangeButton } from '@/entities/flowView-slice/buttons/change';
import { DeleteButton } from '@/entities/flowView-slice/buttons/delete';
import { DownloadButton } from '@/entities/flowView-slice/buttons/download';
import { CommentButton } from '@/entities/flowView-slice/buttons/coment';
import { IUser } from '@/shared/interface/user';
import { getAuthUserData } from '../api';
import { ApproveButton } from '@/entities/flowView-slice/buttons/approve';
export const FlowManagement = ({ flowStatus, flowID = 0}: { flowStatus?: IFlowStatus; flowID?: number }) => {
    const statusType = flowStatus?.status_type;
    const [authUser, setAuthUser] = useState<IUser | null>({} as IUser);
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser | Error = await getAuthUserData();
            if (fetchUser instanceof Error) return;
            else {
                setAuthUser(fetchUser);
            }
        };
        GetUser();
    }, []);
    const userRole = !!authUser?.role?.role_type && (authUser.role.role_type === 'admin' || authUser.role.role_type === 'head') ? true : false;

    return (
        <>
            <section className={styles.layout}>
                {
                    statusType === 'proposal_created' ? <>
                        {userRole && <ApproveButton flowID={flowID} />}
                        <ChangeButton />
                        <DeleteButton flowID={flowID} />
                        <DownloadButton flowID={flowID} />
                    </> :
                        statusType === 'proposal_in_work' || statusType === 'proposal_rejected' || statusType === 'proposal_done' ? <>
                            <DownloadButton flowID={flowID} />
                        </>
                            : statusType === 'proposal_in_approve' ? <>
                                {userRole && <ApproveButton flowID={flowID} />}
                                <CommentButton />
                                <ChangeButton />
                                <DeleteButton flowID={flowID} />
                                <DownloadButton flowID={flowID} />
                            </>
                                : null
                }
            </section>
        </>
    );
};
