export interface IFlowStatus {
    statusCode: 'sent' | 'inProgress' | 'rejected' | 'done' | 'clarification';
    responsible: string; // TODO: поставить IUser
}
