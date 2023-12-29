export interface IUser {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    surname: string;
    class: IClass;
    school: ISchool;
    achievements: IAchievements;
    snils: string;
    role: IRole;
    password?: string | undefined;
}

export interface IRole {
    id: number;
    role_name: string;
    role_type: string;
}

export interface IAchievements {
    id: number;
    name: string;
}

export interface IClass {
    id: number;
    number: number;
    litera: string;
}

export interface ISchool {
    id: number;
    name: string;
    classes: IClass[];
}
