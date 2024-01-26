'use client'

import { IUser } from "@/shared/interface/user"
import { Flex, Typography } from "antd"
import { useEffect, useState } from "react"
import { getAuthUser } from "../api";
import { UserInfoProfileBlock } from "@/widgets/profile-slice/userInfoProfileBlock";
import { AchievementsProfileBlock } from "@/widgets/profile-slice/achievementProfileBlock";

export const  ProfileScreen =()=> {
    const [user, setUser] = useState<IUser>({} as IUser);
    useEffect(() => {
        const GetUser = async () => {
            const fetchUser: IUser | Error = await getAuthUser();
            if (fetchUser instanceof Error) return
            setUser(fetchUser);
        };
        GetUser();
    }, [])


    return (
        <Flex
            vertical
            style={{
                width: "100%",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                backgroundColor: '#fff',
                gap: "1rem"
            }}
        >
            <Typography.Title level={2} style={{ marginBottom: "0.25rem" }}>Профиль</Typography.Title>
            <UserInfoProfileBlock user={user} />
            <AchievementsProfileBlock user={user} />
        </Flex>
    )
}