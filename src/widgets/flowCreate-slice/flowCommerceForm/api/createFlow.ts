import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow } from '@/shared/interface/flow';
import { ICreateCommerceForm } from '@/shared/interface/flowsCreateForm';

export const createFlow = async (flowProps: ICreateCommerceForm): Promise<IFlow | Error> => {
    const requestContent = {
        name: flowProps.title,
        description: flowProps.description,
        category: flowProps.flowType,
        document: flowProps.material,
        isCommercial: true,
        content: {
            aboutCompanyAim: flowProps.flowTarget,
            customQuestions: [
                {
                    question: 'Город, в котором работает отправитель',
                    answer: flowProps.city,
                },
                {
                    question: 'Адрес, по которому работает отправитель',
                    answer: flowProps.address,
                },
                {
                    question: 'Какая проблема решается этим проектом?',
                    answer: flowProps.problem,
                },
            ],
        },
        isDocumentGenerated: false,
    };
    try {
        const { data }: { data: IFlow } = await instanceLogged.post('/proposals/', requestContent);
        return data;
    } catch (error) {
        return error as Error;
    }
};
