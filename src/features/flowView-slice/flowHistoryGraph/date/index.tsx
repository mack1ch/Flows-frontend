import { FlowGraphDate } from '@/entities/flowView-slice/flowGraphDate';
import { FlowGraphTitle } from '@/entities/flowView-slice/flowGraphTitle';
import { FlowGraphIcon } from '@/shared/ui/flowView-slice/flowGraphIcon';
import { IFlowGraphTitle } from '@/shared/interface/flowHistoryGraph';
import { StepProps } from 'antd';

const props: IFlowGraphTitle = {
    responsibleName: 'Степанов Дмитрий Андреевич',
    flowStatus: 'clarification',
};
const date = new Date('2011-10-14T14:48:00');

export const stepItemsData: StepProps[] = [
    {
        title: <FlowGraphTitle flowGraphTitleProps={props} />,
        icon: <FlowGraphIcon isFinish />,
        description: <FlowGraphDate date={date} />,
    },
    {
        title: <FlowGraphTitle flowGraphTitleProps={props} />,
        icon: <FlowGraphIcon isFinish />,
        description: <FlowGraphDate date={date} />,
    },
    {
        title: <FlowGraphTitle flowGraphTitleProps={props} />,
        icon: <FlowGraphIcon isFinish />,
        description: <FlowGraphDate date={date} />,
    },
    {
        title: <FlowGraphTitle flowGraphTitleProps={props} />,
        icon: <FlowGraphIcon isFinish />,
        description: <FlowGraphDate date={date} />,
    },
    {
        title: <FlowGraphTitle flowGraphTitleProps={props} />,
        icon: <FlowGraphIcon text="5" color="#73AE62" />,
        description: <FlowGraphDate date={date} />,
    },
];
