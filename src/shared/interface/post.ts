import { IFlow } from './flow';

export interface IPost {
    id: number;
    comments: number;
    proposal: IFlow;
    likes: number;
    views: number;
    isLiked: boolean;
    isDisliked: boolean;
    dislikes: number;
    reactions: IReaction[];
}

export interface IReaction {
    id: number;
    type: number;
}

