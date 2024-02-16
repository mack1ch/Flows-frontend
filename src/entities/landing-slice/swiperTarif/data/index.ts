export interface ITariffData {
    name: string;
    quantity: string;
    price: number;
}

export const TariffData: ITariffData[] = [
    {
        name: 'Пакет XS',
        quantity: '1-5',
        price: 20,
    },
    {
        name: 'Пакет S',
        quantity: '5-25',
        price: 40,
    },
    {
        name: 'Пакет M',
        quantity: '25-100',
        price: 60,
    },
    {
        name: 'Пакет L',
        quantity: 'более 100',
        price: 80,
    },
];
