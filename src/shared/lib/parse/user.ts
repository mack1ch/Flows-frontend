import { IUser } from '@/shared/interface/user';

interface IFullNameObject {
    value: string;
}

export function getFullName(users: IUser[] | IUser): IFullNameObject[] {
    const userArray = Array.isArray(users) ? users : [users];

    const fullNameArray: IFullNameObject[] = [];

    for (const user of userArray) {
        const fullName: string[] = [];
        if (user.lastname) {
            fullName.push(user.lastname);
        }

        if (user.firstname) {
            fullName.push(user.firstname);
        }

        if (user.surname) {
            fullName.push(user.surname);
        }

        if (fullName.length > 0) {
            fullNameArray.push({ value: fullName.join(' ') });
        }
    }

    return fullNameArray;
}

export function getUserFIO(user?: IUser): string {
    if (!user) return 'Загрузка...';
    if (typeof user.firstname === 'undefined') return 'Загрузка';
    else {
        return `${user.surname} ${user.firstname} ${user.lastname}`;
    }
}

export function getUserFI(user?: IUser): string {
    if (!user) return 'Загрузка...';
    return `${user.firstname} ${user.surname}`;
}

export function getUserIdByFullName(users: IUser[], fullName: string): number {
    const selectedUser = users.find(
        (user) => user.lastname + ' ' + user.firstname + ' ' + user.surname === fullName,
    );

    return selectedUser ? selectedUser.id : 0;
}

export function getUserTelegram(telegram: string): string {
    if (!telegram) return 'Загрузка';
    if (telegram[0] === '@') return telegram.slice(1);
    return telegram;
}

interface FullNameParts {
    lastName: string;
    firstName: string;
    surName: string;
}

export function splitFullName(fullName: string): FullNameParts {
    const parts = fullName.split(' ');
    const [lastName, firstName, ...surNameArray] = parts;
    const surName = surNameArray.join(' ');
    return { lastName, firstName, surName };
}
