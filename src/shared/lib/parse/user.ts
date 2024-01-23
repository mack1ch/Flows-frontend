import { IUser } from "@/shared/interface/user";

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

export function getUserFIO(user: IUser): string {
    return `${user.lastname} ${user.firstname} ${user.surname}`;
}


export function getUserIdByFullName(users: IUser[], fullName: string): number {
    const selectedUser = users.find(user =>
        (user.lastname + ' ' + user.firstname + ' ' + user.surname) === fullName
    );

    return selectedUser ? selectedUser.id : 0;
}