import { instanceLogged } from '@/shared/api/axios-config';
import { IContent } from '@/shared/interface/flow';
import { ICreateFlow } from '@/shared/interface/flowsCreateForm';

interface IResponse {
    message: {
        role: string;
        text: string;
    };
    status: string;
}

export const getGenerateFuncTask = async (
    flowProps: ICreateFlow,
    isFullFormat: boolean,
    categoryValue?: string,
): Promise<string | Error> => {
    const postContent: IContent = {
        proposalAim: flowProps.projectGoal,
        proposalType: categoryValue && categoryValue,
        benefits: flowProps.financialBenefit,
        name: flowProps.title,
        description: flowProps.description,
        limitFactors: (isFullFormat && flowProps.limitingFactors) || undefined,
    };
    try {
        const { data }: { data: IResponse } = await instanceLogged.post(
            `proposals/documents/`,
            postContent,
        );
        return data.message.text;
    } catch (error) {
        return error as Error;
    }
};
