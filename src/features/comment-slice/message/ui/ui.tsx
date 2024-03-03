import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { getAuthUserData, getFlowByID } from '../api';
import Link from 'next/link';
import { getUserFI } from '@/shared/lib/parse/user';
import { parseDateToTextFormat } from '@/shared/lib/parse/date';
import { parseTimeToRuFormat } from '@/shared/lib/parse/time';
import Avatar from '../../../../../public/icons/avatar-black.svg';
import { IUser } from '@/shared/interface/user';
import { IFlow } from '@/shared/interface/flow';
export const Message = ({ flowID, newFlow }: { flowID: number; newFlow?: IFlow }) => {
    const [flow, setFlow] = useState<IFlow | undefined>(undefined);
    const [authUser, setAuthUser] = useState<IUser | null>(null);
    useEffect(() => {
        const GetComments = async () => {
            const fetchFlow: IFlow | Error = await getFlowByID(flowID);

            if (fetchFlow instanceof Error) return;
            else {
                setFlow(fetchFlow);
            }
        };
        const GetUser = async () => {
            const fetchUser: IUser | Error = await getAuthUserData();
            if (fetchUser instanceof Error) return;
            else {
                setAuthUser(fetchUser);
            }
        };
        GetUser();
        GetComments();
    }, []);
    useEffect(() => {
        if (newFlow) {
            setFlow(newFlow);
        }
    }, [newFlow]);
    return (
        <>
            <section key={Math.random()} className={styles.commentsWrap}>
                {flow?.history?.map(
                    (item) =>
                        item.status.statusType === 'proposalNeedRevision' && (
                            <article key={item.id} className={styles.message}>
                                <span
                                    style={{
                                        backgroundImage: `url(${
                                            item?.user?.avatar ? item.user.avatar : Avatar.src
                                        })`,
                                    }}
                                    className={styles.userIMG}
                                />
                                <div className={styles.messageInfo}>
                                    <div className={styles.userInfo}>
                                        <Link
                                            style={{
                                                color:
                                                    item?.user?.id === authUser?.id
                                                        ? '#73AE62'
                                                        : undefined,
                                            }}
                                            className={styles.user}
                                            href="/profile">
                                            {getUserFI(item.user)},
                                        </Link>
                                        <span className={styles.date}>{`${parseDateToTextFormat(
                                            item.createdAt,
                                        )}, ${parseTimeToRuFormat(item.createdAt)}`}</span>
                                    </div>
                                    <p className={styles.message}>{item.comment}</p>
                                </div>
                            </article>
                        ),
                )}
            </section>
        </>
    );
};
