import { IAchievement } from './achievement';

// export interface IUser {
//     id: number;
//     email: string;
//     telegram: string;
//     vk: string;
//     phone: string;
//     firstname: string;
//     lastname: string;
//     surname: string;
//     birthday: string;
//     job: IJob;
//     role: IRole;
//     password: string;
//     division: string;
//     achievements: IAchievement[];
//     achievements_count: number;
//     achievements_points: number;
//     likes_sended: number;
//     avatar: string;
//     rating_position: number;
//     proposalsCount: number; // Количество поданных заявок
//     department: IDepartment;
// }

export interface IUser {
    id: number;
    firstname: string;
    surname: string;
    lastname: string;
    email: string;
    phone: string;
    birthday: string;
    role: IRole;
    department: IDepartment;
    job: IJob;
    proposalCount: number;
    telegram: string;
    vk: string;
    avatar: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface IRole {
    id: number;
    name: 'member' | 'moderator';
}

// Должность
export interface IJob {
    id: number;
    name: string;
    description: string;
}

export interface IDepartment {
    id: number;
    name: string;
    description: string;
}
