import { instanceLogged } from "@/shared/api/axios-config";
import { IFlow } from "@/shared/interface/flow";
import { ICreateFlow } from "@/shared/interface/flowsCreateForm";
import { IUser } from "@/shared/interface/user";


export const createFlow = async (flowProps: ICreateFlow, user_to: number): Promise<IFlow | Error> => {
    try {
        const { data }: { data: IFlow } = await instanceLogged.post(
            '/proposals/create/',
            {
                name: flowProps.title,
                category: flowProps.requestType,
                user_to: user_to,
                content: {
                    'Тип запроса': flowProps.requestType,
                    'Цель проекта': flowProps.projectGoal,
                    'Какую выгоду несет реализация проекта в деньгах': flowProps.financialBenefit,
                    'Какие смежные отделы затрагивает ваш проект/запрос?': flowProps.relatedDepartments,
                    'Есть ли какие-либо ограничивающие факторы?': flowProps.limitingFactors,
                    'Как ваш проект/запрос поможет достичь развитие формата и покрытие регионов магазинами?': flowProps.projectImpact,
                    'Ссылка на техническое задание': flowProps.technicalSpecificationLink
                }
            }
        );
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
        return error as Error;
    }
};