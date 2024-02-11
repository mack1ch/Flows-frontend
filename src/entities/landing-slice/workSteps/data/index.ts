import { StaticImageData } from 'next/image';
import Flow from '../../../../../public/assets/flow.png';
import Comments from '../../../../../public/assets/comments.svg';
import History from '../../../../../public/assets/history.svg';
interface ICard {
    id: number;
    title: string;
    img: StaticImageData;
}

export const DCards: ICard[] = [
    {
        id: 0,
        title: 'Создание заявки',
        img: Flow,
    },
    {
        id: 1,
        title: 'Голосование и обсуждение',
        img: Comments,
    },
    {
        id: 2,
        title: 'Выполнение заявки',
        img: History,
    },
];
