import { CheckboxValueType } from "antd/es/checkbox/Group";

export interface ICreateFlow {
    title: string;
    requestType: number | null;
    projectGoal: string;
    financialBenefit: string;
    relatedDepartments: CheckboxValueType[];
    limitingFactors: string;
    projectImpact: string;
    technicalSpecificationLink: string;
    user_to: number | null;
}