'use client';

import { IFlowStatus } from '@/shared/interface/flow';

import styles from './ui.module.scss';
import React, { useEffect, useState } from 'react';
import { DeleteButton } from '@/entities/flowView-slice/buttons/delete';
import { DownloadButton } from '@/entities/flowView-slice/buttons/download';
import { CommentButton } from '@/entities/flowView-slice/buttons/coment';
import { IUser } from '@/shared/interface/user';
import { getAuthUserData } from '../api';
import { ApproveButton } from '@/entities/flowView-slice/buttons/approve';
import { InWorkButton } from '@/entities/flowView-slice/buttons/inWork';
import { ToDoneButton } from '@/entities/flowView-slice/buttons/toDone';
import { RejectedButton } from '@/entities/flowView-slice/buttons/rejected';
export const FlowManagement = ({
    flowStatus,
    flowID = 0,
}: {
    flowStatus?: IFlowStatus;
    flowID?: number;
}) => {
    const statusType = flowStatus?.statusType;
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

    const isModerator =
        !!authUser && authUser.role?.name === 'moderator'
            ? true
            : !!authUser && authUser.role?.name === 'member'
            ? false
            : undefined;

    return (
        <>
            <section className={styles.layout}>
                {statusType === 'proposalApproved' ? (
                    <>
                        {isModerator && <InWorkButton flowID={flowID} />}
                        <DeleteButton flowID={flowID} />
                        <DownloadButton flowID={flowID} />
                    </>
                ) : statusType === 'proposalInWork' ? (
                    <>
                        {isModerator && <ToDoneButton flowID={flowID} />}
                        <DeleteButton flowID={flowID} />
                        <DownloadButton flowID={flowID} />
                    </>
                ) : statusType === 'proposalRejected' || statusType === 'proposalDone' ? (
                    <>
                        <DownloadButton flowID={flowID} />
                    </>
                ) : statusType === 'proposalInApprove' || statusType === 'proposalNeedRevision' ? (
                    <>
                        {isModerator && <ApproveButton flowID={flowID} />}
                        <CommentButton flowID={flowID} />
                        <RejectedButton flowID={flowID} />
                        <DownloadButton flowID={flowID} />
                    </>
                ) : null}
            </section>
        </>
    );
};
