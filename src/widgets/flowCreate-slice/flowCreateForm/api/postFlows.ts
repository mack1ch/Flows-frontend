import { instanceLogged } from "@/shared/api/axios-config";
import { IFlow } from "@/shared/interface/flow";
import { ICreateFlow } from "@/shared/interface/flowsCreateForm";

export const createFlow = async (flowProps: ICreateFlow, user_to: number, categoryValue: string | undefined): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.post(
            '/proposals/create/',
            {
                name: flowProps.title,
                category: flowProps.requestType,
                user_to: user_to,
                content: {
                    'Тип запроса': categoryValue,
                    'Цель проекта': flowProps.projectGoal,
                    'Какую выгоду несет реализация проекта в деньгах': flowProps.financialBenefit,
                    'Какие смежные отделы затрагивает ваш проект/запрос?': flowProps.relatedDepartments,
                    'Есть ли какие-либо ограничивающие факторы?': flowProps.limitingFactors,
                    'Ссылка на техническое задание': flowProps.technicalSpecificationLink
                }
            }
        );
        return data;
    } catch (error) {
        return error as Error;
    }
};