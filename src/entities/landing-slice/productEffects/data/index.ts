import { StaticImageData } from 'next/image';
import Users from '../../../../../public/assets/users.svg';
import Person from '../../../../../public/assets/person.svg';
import Light from '../../../../../public/assets/light.svg';
import Smile from '../../../../../public/assets/smile.svg';
interface ICard {
    id: number;
    title: string;
    img: StaticImageData;
}

export const DCards: ICard[] = [
    {
        id: 0,
        title: 'Удержание квалифицированного персонала',
        img: Users,
    },
    {
        id: 1,
        title: 'Популяризация HR-бренда',
        img: Person,
    },
    {
        id: 2,
        title: 'Поиск сотрудников-инноваторов',
        img: Light,
    },
    {
        id: 4,
        title: 'Увеличение лояльности клиента к бизнесу',
        img: Smile,
    },
];
