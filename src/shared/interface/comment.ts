import { IUser } from "./user";

export interface IComment {
    id: number;
    text: string;
    user: IUser;
    createdAt: Date;
}