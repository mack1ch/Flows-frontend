import { IHeaderItem } from '@/shared/interface/header';
import Flows from '../../../../public/icons/directbox-notif-black.svg';
import Profile from '../../../../public/icons/avatar-black.svg';
import Plus from '../../../../public/icons/plus-black.svg';
export const SideNavBarItems: IHeaderItem[] = [
    {
        title: 'Заявки',
        path: '/flows',
        icon: Flows,
        submenu: true,
        subMenuItems: [
            { title: 'Новая заявка', path: '/flows/create', icon: Plus },
            { title: 'Мои заявки', path: '/flows/my' },
            { title: 'Архив', path: '/flows/archive' },
        ],
    },
];

export const SideBarProfileItem: IHeaderItem = {
    title: 'Профиль',
    path: '/profile',
    icon: Profile,
    submenu: false,
};
