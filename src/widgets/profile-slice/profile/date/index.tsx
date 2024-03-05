import { Services } from '@/entities/services-slice/services';
import { Articles } from '@/features/news-slice/articles';
import { AchievementList } from '@/features/profile-screen/achievementList';
import { TabsProps } from 'antd';

export const tabItems: TabsProps['items'] = [
    {
        key: '1',
        label: 'Заявки',
        children: <Articles isMy />,
    },
    {
        key: '2',
        label: 'Достижения',
        children: <AchievementList />,
    },
    {
        key: '3',
        label: 'Сервисы',
        children: <Services />,
    },
];
