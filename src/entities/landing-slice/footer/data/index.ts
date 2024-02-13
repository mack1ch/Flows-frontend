interface IFooter {
    id: number;
    title: string;
    subItems: ISubItems[];
}

interface ISubItems {
    name: string;
    href: string;
}

export const DFooter: IFooter[] = [
    {
        id: 0,
        title: 'Продукт',
        subItems: [
            {
                name: 'О продукте',
                href: '',
            },
            {
                name: 'Как это работает?',
                href: '#work',
            },
            {
                name: 'Основные функции',
                href: '',
            },
            {
                name: 'Зачем внедрять',
                href: '#effects',
            },
        ],
    },
    {
        id: 1,
        title: 'Цены',
        subItems: [
            {
                name: 'Тарифы',
                href: '',
            },
        ],
    },
    {
        id: 2,
        title: 'Контакты',
        subItems: [
            {
                name: 'Связь с нами',
                href: '#contact',
            },
        ],
    },
];
