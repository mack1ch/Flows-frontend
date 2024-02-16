import { AxiosRequestConfig } from 'axios';

export namespace AllExceptions {
    export enum EAuthExceptions {
        AccountIsNotVerified = 'Account is not verified. Please verify your email.',
        WrongPassword = 'Wrong password',
        ExpiredToken = 'Access token expired',
        InvalidAccessToken = 'Invalid access token',
    }

    export enum ESessionExceptions {
        SessionNotFound = 'Session is not found',
        SessionExpired = 'Session expired',
    }

    export enum EUserExceptions {
        UserNotFound = 'User is not found',
        UserAlreadyExists = 'User already exists',
    }

    export enum ECategoryExceptions {
        CategoryNotFound = 'Category is not found',
        UserAlreadyExists = 'Category already exists',
    }

    export enum EDocumentExceptions {
        DocumentNotFound = 'Document is not found',
    }

    export enum EProposalExceptions {
        ProposalNotFound = 'Proposal is not found',
    }

    export enum EDepartmentExceptions {
        DepartmentNotFound = 'Department is not found',
    }

    export enum EQueries {
        InvalidLimitOffset = 'limit * offset - offset can`t be < 0',
    }
}

export interface IInvalidToken {
    statusCode: number;
    message: string;
    output: {
        name: string;
        message: string;
        expiredAt: string;
    };
}

export interface ICustomAxiosRequestConfig extends AxiosRequestConfig {
    dataResponse?: IInvalidToken;
}
