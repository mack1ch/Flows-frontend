import { IUser } from "./user";

export interface IFlow {
    id: number;
    name: string;
    author: IUser;
    category: IFlowCategory;
    level: number;
    histories: IFlowHistory[];
    content: JSON;
    document: string;
    created_date: Date;
    
    comment: string[] | null;
}

export interface IFlowCategory {
    id: number;
    name: string;
}
export interface IFlowHistory {
    id: number;
    by_user: IUser;
    status: IFlowStatus;
    date: Date;
}

export interface IFlowStatus {
    id: number;
    name: TFlowStatusName;
    status_type: TFlowStatusType;
}
export type TFlowStatusType = 'proposal_created' | 'proposal_done' | 'proposal_need_revision' | 'proposal_rejected' | 'proposal_approved' | 'proposal_in_work' | 'proposal_in_approve';
export type TFlowStatusName = 'Заявка создана' | 'Выполнено' | 'Требуется уточнение у автора' | 'Отклонено' | 'Заявка согласована' | 'В работе' | 'На согласовании';