export interface IUserRegister {
    fio: string;
    firstname?: string;
    surname?: string;
    lastname?: string;
    email: string;
    phone: string;
    password?: string;
    department?: number;
    job?: number;
    birthday: Date | string;
    telegram: string;
    role: string;
    company?: number;
}
