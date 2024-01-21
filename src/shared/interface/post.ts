import { IFlow } from "./flow";

export interface IPost extends IFlow {
    likes: number;
    comments: number;
    views: number;
}