import { IHeaderItem } from '@/shared/interface/header';
import Document from '../../../public/icons/doc-black.svg';
import Profile from '../../../public/icons/avatar-black.svg';
export const SideNavBarItems: IHeaderItem[] = [
    {
        title: 'Секции',
        path: '/section',
        icon: Document,
        submenu: true,
        subMenuItems: [
            { title: 'Новая секция', path: '/section/create' },
            { title: 'Мои секции', path: '/section/my' },
        ],
    },
    {
        title: 'Новости',
        path: '/news',
        icon: Document,
        submenu: false,
    },
    {
        title: 'Заявки',
        path: '/flows',
        icon: Document,
        submenu: false,
    },
];

export const SideBarProfileItem: IHeaderItem = {
    title: 'Профиль',
    path: '/profile',
    icon: Profile,
    submenu: false,
};
