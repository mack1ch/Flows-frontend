import { IUserRegister } from '../iterface';

export const RequestFields: (keyof IUserRegister)[] = [
    'fio',
    'birthday',
    'department',
    'email',
    'job',
    'telegram',
    'phone',
];
