import { instanceLogged } from "@/shared/api/axios-config";
import { ICreateFlow } from "@/shared/interface/flowsCreateForm";

export const getGenerateFuncTask = async (flowProps: ICreateFlow, categoryValue: string | undefined, isFullFormat: boolean): Promise<string | Error> => {
    const content = isFullFormat ? {
        'Название заявки': flowProps.title,
        'Описание заявки': flowProps.description,
        'Тип запроса': categoryValue,
        'Цель проекта': flowProps.projectGoal,
        'Какую выгоду несет реализация проекта?': flowProps.financialBenefit,
        'Какие эффекты будут от внедрения проекта?': flowProps.effects,
    } : {
        'Название заявки': flowProps.title,
        'Описание заявки': flowProps.description,
        'Тип запроса': categoryValue,
        'Цель проекта': flowProps.projectGoal,
        'Какую выгоду несет реализация проекта?': flowProps.financialBenefit,
        'Какие эффекты будут от внедрения проекта?': flowProps.effects,
    };
    try {
        const { data }: { data: string } = await instanceLogged.post(
            `proposals/requirements/generate/`, { proposal_content: content }
        );
        console.log(content, data);
        return data;
    } catch (error) {
        return error as Error;
    }
};