
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
    division: string;
    password: string;
}

export interface IRole {
    id: number;
    name: string;
    role_type: TRoleType;
}

export type TRoleType = 'admin' | 'head' | 'employee'

export interface IJob {
    id: number;
    name: string;
    description: string;
}

