import { instanceLogged } from "@/shared/api/axios-config";
import { IFlow } from "@/shared/interface/flow";
import { ICreateFlow } from "@/shared/interface/flowsCreateForm";

export const createFlow = async (flowProps: ICreateFlow, user_to: number, categoryValue: string | undefined, isFullFormat: boolean, techTask: string): Promise<IFlow | Error> => {
    const content = isFullFormat ? {
        'Название': flowProps.title,
        'Описание': flowProps.description,
        'Тип запроса': categoryValue,
        'Цель проекта': flowProps.projectGoal,
        'Как ваш проект позволит достичь цели компании?': flowProps.effects,
        'Какие смежные отделы затрагивает ваш проект/запрос?': flowProps.relatedDepartments,
        'Какую выгоду несет реализация проекта?': flowProps.financialBenefit,
        'Есть ли какие-либо ограничивающие факторы?': flowProps.limitingFactors,
        'Ссылка на техническое задание': techTask,
    } : {
        'Название': flowProps.title,
        'Описание': flowProps.description,
        'Тип запроса': categoryValue,
        'Как ваш проект позволит достичь цели компании?': flowProps.effects,
        'Какие смежные отделы затрагивает ваш проект/запрос?': flowProps.relatedDepartments,
        'Какую выгоду несет реализация проекта?': flowProps.financialBenefit,
        'Ссылка на техническое задание': techTask,

    };
    try {
        const { data }: { data: IFlow } = await instanceLogged.post(
            '/proposals/create/',
            {
                name: flowProps.title,
                category: flowProps.requestType,
                user_to: user_to,
                content: content
            }
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};