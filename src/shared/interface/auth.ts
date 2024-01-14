export interface IAuth {
    email?: string;
    password: string;
    phone?: string;
}

export interface IToken {
    refresh: string;
    access: string;
}

export interface IError {
    data: {
        not_field_errors: string[];
    };
    status: number;
}

export interface IResponseAuth {
    data: IToken;
}

export interface IFormData {
    email: string;
    phone: string;
    password: string;
}