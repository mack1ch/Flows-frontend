import { IAchievement } from './achievement';
import { IFlow } from './flow';

export interface IUser {
    id: number;
    email: string;
    telegram: string;
    vk: string;
    phone: string;
    firstname: string;
    lastname: string;
    surname: string;
    birthday: string;
    job: IJob;
    role: IRole;
    password: string;
    division: string;
    achievements: IAchievement[];
    achievements_count: number;
    achievements_points: number;
    likes_sended: number;
    avatar: string;
    rating_position: number;
    proposalsCount: number; // Количество поданных заявок
    department: IDepartment;
}

export interface IRole {
    id: number;
    role_type: string;
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
