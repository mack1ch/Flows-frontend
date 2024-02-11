import { StaticImageData } from 'next/image';
import Process from '../../../../../public/assets/optimizateproccesions.png';
import Achievements from '../../../../../public/assets/achievements.png';

interface ICard {
    id: number;
    title: string;
    description: string;
    img: StaticImageData;
}

export const DCards: ICard[] = [
    {
        id: 0,
        title: 'Оптимизируйте процессы',
        description: 'Получайте взгляд “изнутри” от сотрудников ',
        img: Process,
    },
    {
        id: 1,
        title: 'Поощаряйте сотрудников',
        description: 'Специальная система рейтингов и достижений',
        img: Achievements,
    },
];
