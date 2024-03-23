import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow } from '@/shared/interface/flow';
import { ICreateNoCommerceForm } from '@/shared/interface/flowsCreateForm';

export const createFlow = async (flowProps: ICreateNoCommerceForm): Promise<IFlow | Error> => {
    const requestContent = {
        name: flowProps.newProduct,
        document: flowProps.material,
        isDocumentGenerated: false,
        content: {
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
                    question: 'Почему этот продукт так важен?',
                    answer: flowProps.cause,
                },
            ],
        },
    };
    try {
        const { data }: { data: IFlow } = await instanceLogged.post('/proposals/', requestContent);
        return data;
    } catch (error) {
        return error as Error;
    }
};
