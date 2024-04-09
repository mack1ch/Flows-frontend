'use client';

import { IAchievement } from '@/shared/interface/achievement';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { getAuthAchievement } from '../api';
import { Achievement } from '@/entities/profile-slice/achievement';

export const AchievementList = () => {
    const [achievement, setAchievement] = useState<IAchievement[] | null>(null);
    useEffect(() => {
        async function getUser() {
            const authUser: IAchievement[] | Error = await getAuthAchievement();
            if (authUser instanceof Error) return;
            setAchievement(authUser);
        }
        getUser();
    }, []);
    return (
        <>
            <section className={styles.wrap}>
                {achievement?.map((item) => (
                    <Achievement key={item.id} achievement={item} />
                ))}
            </section>
        </>
    );
};
