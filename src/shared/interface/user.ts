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
}

export interface IRole {
    id: number;
    role_type: string;
}

export interface IJob {
    id: number;
    name: string;
    description: string;
}

