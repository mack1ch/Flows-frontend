import { CheckboxValueType } from 'antd/es/checkbox/Group';

export interface ICreateFlow {
    title: string;
    requestType: number | null;
    projectGoal: string;
    financialBenefit: string;
    relatedDepartments: CheckboxValueType[];
    limitingFactors: string;
    technicalSpecificationLink: string;
    user_to: number | null;
    description: string;
    effects: string;
    userName: string;
    telegramID: string;
    departmentName: string;
}

export interface ICreateCommerceForm {
    title: string;
    flowType: number | null;
    description: string;
    flowTarget: CheckboxValueType[] | undefined;
    address: string;
    city: string;
    material: string;
    problem: string;
}

export interface ICreateNoCommerceForm {
    address: string;
    city: string;
    newProduct: string;
    cause: string;
    material: string;
}
