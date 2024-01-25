import { IHeaderItem } from '@/shared/interface/header';
import Flows from '../../../../public/icons/directbox-notif-black.svg';
import Profile from '../../../../public/icons/avatar-black.svg';
import Plus from '../../../../public/icons/plus-black.svg';
import Company from '../../../../public/icons/company-black.svg';
import Rating from '../../../../public/icons/rating-black.svg';
export const SideNavBarItems: IHeaderItem[] = [
    {
        title: 'Заявки',
        path: '/flows',
        icon: Flows,
        submenu: true,
        subMenuItems: [
            { title: 'Новая заявка', path: '/flows/choice', icon: Plus },
            { title: 'Мои заявки', path: '/flows/my' },
            { title: 'Одобренные заявки', path: '/flows/archive' },
        ],
    },
    {
        title: 'Моя компания',
        path: '/mycompany',
        icon: Company,
        submenu: true,
        subMenuItems: [{ title: 'Лента', path: '/mycompany/news' }]
    },
    {
        title: 'Рейтинг',
        path: '/mycompany/rating',
        icon: Rating,
        submenu: false,
    }
];

export const SideBarProfileItem: IHeaderItem = {
    title: 'Профиль',
    path: '/profile',
    icon: Profile,
    submenu: false,
};
