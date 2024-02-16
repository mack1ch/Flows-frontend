import { IUser } from './user';

export interface IFlow {
    id: number;
    name: string;
    author: IUser;
    category: IFlowCategory;
    level: number;
    histories: IFlowHistory[];
    content: IContent;
    document: IDocument;
    createdAt: Date;
    comment: string[] | null;
    documentLink: string;
}

export interface IDocument {
    id: number;
    name: string;
    createdAt: string;
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

export interface IContent {
    name?: string;
    description?: string;
    proposalAim?: string; // Цель
    aboutCompanyAim?: string;
    proposalType?: string; // Тип заявки
    benefits: string; // Выгода от проекта
    limitFactors?: string; // Стоп-факторы
    customQuestions?: ICustomQuestion[]; // Ответ на кастомные вопросы
}

export interface IFlowStatus {
    id: number;
    name: TFlowStatusName;
    status_type: TFlowStatusType;
}
export type TFlowStatusType =
    | 'proposal_created'
    | 'proposal_done'
    | 'proposal_need_revision'
    | 'proposal_rejected'
    | 'proposal_approved'
    | 'proposal_in_work'
    | 'proposal_in_approve';
export type TFlowStatusName =
    | 'Заявка создана'
    | 'Выполнено'
    | 'Требуется уточнение у автора'
    | 'Отклонено'
    | 'Заявка согласована'
    | 'В работе'
    | 'На согласовании';
export type ICustomQuestion = { question: string; answer: string };
