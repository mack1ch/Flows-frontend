import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Edu from '../../../../../public/servicesLogos/edu.svg';
import Afisha from '../../../../../public/servicesLogos/afisha.svg';
import Docs from '../../../../../public/servicesLogos/docs.svg';
import Market from '../../../../../public/servicesLogos/market.svg';
import Kadri from '../../../../../public/servicesLogos/kadri.svg';
import Project from '../../../../../public/servicesLogos/project.svg';
interface IService {
    id: number;
    title: string;
    description: string;
    icon: StaticImport;
}

export const DServices: IService[] = [
    {
        id: 0,
        title: 'Inverse.Кадры',
        description: 'Сервис для вовлечения сотрудников во внутрикорпоративные активности',
        icon: Kadri,
    },
    {
        id: 1,
        title: 'Inverse.Project',
        description: 'Сервис для организации проектной деятельности в учебном заведении',
        icon: Project,
    },
    {
        id: 2,
        title: 'Inverse.Афиша',
        description: 'Сервис для формирование туристических пакетов',
        icon: Afisha,
    },
    {
        id: 3,
        title: 'Inverse.Маркет',
        description: 'Сервис для оптимизации взаимодействия сотрудников с кейтирингом',
        icon: Market,
    },
    {
        id: 4,
        title: 'Inverse.Документы',
        description: 'Сервис для автоматизации согласования документов внутри компании ',
        icon: Docs,
    },
    {
        id: 5,
        title: 'Inverse.Образование',
        description:
            'Сервис для автоматизации процесса обучения внутри УДО',
        icon: Edu,
    },
];
