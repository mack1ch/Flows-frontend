import { IFlow } from "./flow";

export interface IPost {
    likes: number;
    comments: number;
    proposal: IFlow;
    id: number;
    views: number;
    user_likes: number[];
}