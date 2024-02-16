import { IFlowHistory, TFlowStatusType } from '@/shared/interface/flow';
import { IFlowGraphTitle } from '@/shared/interface/flowHistoryGraph';
import { getUserFIO } from './user';
import { StepProps } from 'antd';
import { FlowGraphTitle } from '@/entities/flowView-slice/flowGraphTitle';
import { FlowGraphDate } from '@/entities/flowView-slice/flowGraphDate';
import { FlowGraphIcon } from '@/shared/ui/flowView-slice/flowGraphIcon';

export function convertToFlowGraphTitle(history: IFlowHistory): IFlowGraphTitle {
    return {
        responsibleName: getUserFIO(history.user),
        flowStatus: history.status.statusType,
    };
}

export const convertHistoryToStepProps = (history: IFlowHistory[]): StepProps[] => {
    return history.map((item) => {
        const stepProps: StepProps = {
            title: <FlowGraphTitle responsibleUser={item.user} flowStatus={item.status} />,
            icon: <FlowGraphIcon isFinish />,
            description: <FlowGraphDate date={item.status.createdAt} />,
        };

        return stepProps;
    });
};
