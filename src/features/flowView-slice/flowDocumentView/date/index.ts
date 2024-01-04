interface IItemDate {
    date: string;
    isLink?: boolean;
    href?: string;
}

export const dateItems: IItemDate[] = [
    {
        date: 'Петров Николай Алексеевич',
        isLink: true,
        href: '/',
    },
    {
        date: '@mack1ch',
        isLink: true,
        href: 'https://t.me/mack1ch',
    },
    {
        date: 'Операционный отдел',
    },
    {
        date: 'Доработка текущего функционала',
    },
    {
        date: 'Сокращение рутинной ручной работы',
    },
    {
        date: 'Оптимизация работы сотрудника/сотрудников отдела',
    },
    {
        date: 'Коммерческий отдел, Маркетинг, Операционный отдел',
    },
    {
        date: 'Нет',
    },
    {
        date: 'Более точное и оперативное управление ценами во всех городах (чем больше городов - тем это сложнее)',
    },
    {
        date: 'https://docs.google.com/presentation/',
        isLink: true,
        href: 'https://t.me/mack1ch',
    },
];
