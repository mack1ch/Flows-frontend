'use client'

import { AchievementCard } from '@/features/profile-slice/achievementCard/ui/ui';
import { IAchievement } from '@/shared/interface/achievement';
import { IUser } from '@/shared/interface/user';
import { Flex, Typography } from 'antd'
import styles from './ui.module.scss'

export const AchievementsProfileBlock = ({ user }: { user: IUser }) => {
    const achievements: IAchievement[] = user.achievements;

    return (
        <Flex
            vertical
            gap="1rem"
            style={{
                padding: "1.75rem",
                width: "100%",
                backgroundColor: '#fff',
                boxShadow: '0px 4px 4px 0px #00000014, 0px 0px 2px 0px #0000000A',
                borderRadius: "1rem",
                borderWidth: "0.5px",
                borderColor: "#EBEBEB",
                borderStyle: "solid"
            }}
        >
            <Typography.Text strong style={{ fontSize: "1.5rem" }}>Мои достижения</Typography.Text>
            <div className={styles.cardLayout}>
                {achievements?.map((item, index) => (
                    <AchievementCard key={index} achievement={item} />
                ))}
            </div>
        </Flex >
    )
}