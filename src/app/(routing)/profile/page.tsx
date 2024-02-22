import { Achievement } from '@/entities/profile-slice/achievement';
import { UserAvatar } from '@/entities/profile-slice/avatar';
import { AchievementList } from '@/features/profile-screen/achievementList';
import { ProfileHeader } from '@/features/profile-screen/header';
import { Profile } from '@/widgets/profile-slice/profile';

export default function ProfilePage() {
    return (
        <>
            <Profile/>
        </>
    );
}
