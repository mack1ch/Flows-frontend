export interface IFlowStatus {
    statusCode: 'sent' | 'inProgress' | 'rejected' | 'done' | 'clarification' | 'comment';
    responsible: string; // TODO: поставить IUser
}
