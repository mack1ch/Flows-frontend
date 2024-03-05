import { instanceLogged } from '@/shared/api/axios-config';
import { IFlow } from '@/shared/interface/flow';
import { ICreateFlow } from '@/shared/interface/flowsCreateForm';
import { splitFullName } from '@/shared/lib/parse/user';

export const createFlow = async (
    flowProps: ICreateFlow,
    categoryValue: number | undefined,
    isFullFormat: boolean,
    techTask: string,
): Promise<IFlow | Error> => {
    const { lastName, firstName, surName } = splitFullName(flowProps.userName);
    const postContent = {
        name: flowProps.title,
        description: flowProps.description,
        category: categoryValue,
        content: {
            aboutCompanyAim: flowProps.effects,
            benefits: flowProps.financialBenefit,
            limitFactors: (isFullFormat && flowProps.limitingFactors) || undefined,
        },
        document: flowProps.technicalSpecificationLink,
        isDocumentGenerated: false,
        firstname: firstName,
        surname: surName,
        lastname: lastName,
        department: flowProps.departmentName,
        telegram: flowProps.telegramID,
    };

    try {
        const { data }: { data: IFlow } = await instanceLogged.post('/proposals/', postContent);
        return data;
    } catch (error) {
        return error as Error;
    }
};
