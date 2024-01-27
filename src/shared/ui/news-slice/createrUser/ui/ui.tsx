'use client'

import { IUser } from "@/shared/interface/user"
import Link from "next/link"
import styles from './ui.module.scss'
import { useEffect, useState } from "react";
export const CreaterUser = ({ user, href = '/' }: { user?: IUser, href?: string }) => {
    const [userFullName, setUserFullName] = useState<string | null>(null);
    useEffect(() => {
        const userFullNameFunc: string | null = user ? user.lastname + ' ' + user.firstname + ' / ' + user.division : 'Загрузка...';
        setUserFullName(userFullNameFunc);
    }, [user])
    return (<>
        <div className={styles.user} >
            <p className={styles.text}>
                {userFullName}
            </p>
        </div>
    </>)
}