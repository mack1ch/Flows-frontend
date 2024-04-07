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
    avatar?: string;
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
