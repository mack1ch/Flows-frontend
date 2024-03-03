import { IUser } from './user';

export interface IFlow {
    id: number;
    name: string;
    author: IUser;
    category: IFlowCategory;
    level: number;
    history: IFlowHistory[];
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
    user: IUser;
    status: IFlowStatus;
    createdAt: Date;
    comment?: string;
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
    statusType: TFlowStatusType;
}
export type TFlowStatusType =
    | 'proposalCreated'
    | 'proposalDone'
    | 'proposalNeedRevision'
    | 'proposalRejected'
    | 'proposalApproved'
    | 'proposalInWork'
    | 'proposalInApprove';
export type TFlowStatusName =
    | 'Заявка создана'
    | 'Выполнено'
    | 'Требуется уточнение у автора'
    | 'Отклонено'
    | 'Заявка согласована'
    | 'В работе'
    | 'На согласовании';
export type ICustomQuestion = { question: string; answer: string };
