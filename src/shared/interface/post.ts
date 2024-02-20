import { IFlow } from './flow';

export interface IPost {
    id: number;
    comments: number;
    proposal: IFlow;
    likes: number;
    views: number;
    isLiked: boolean;
}
