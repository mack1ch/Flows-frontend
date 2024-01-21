import { IFlowHistory, TFlowStatusType } from "@/shared/interface/flow";
import { IFlowGraphTitle } from "@/shared/interface/flowHistoryGraph";
import { getUserFIO } from "./user";
import { StepProps } from "antd";
import { FlowGraphTitle } from "@/entities/flowView-slice/flowGraphTitle";
import { FlowGraphDate } from "@/entities/flowView-slice/flowGraphDate";
import { FlowGraphIcon } from "@/shared/ui/flowView-slice/flowGraphIcon";

export function convertToFlowGraphTitle(history: IFlowHistory): IFlowGraphTitle {
    return {
        responsibleName: getUserFIO(history.by_user),
        flowStatus: history.status.status_type,
    };
}

const mapFlowStatusToStepStatus = (flowStatus: TFlowStatusType): 'wait' | 'process' | 'finish' | 'error' => {
    switch (flowStatus) {
        case 'proposal_in_work':
            return 'process';
        case 'proposal_done':
            return 'finish';
        case 'proposal_rejected':
            return 'error';
        default:
            return 'wait';
    }
};


export const convertHistoryToStepProps = (history: IFlowHistory[]): StepProps[] => {
    return history.map((item) => {

        const stepProps: StepProps = {
            title: <FlowGraphTitle responsibleUser={item.by_user} flowStatus={item.status} />,
            icon: <FlowGraphIcon isFinish />,
            description: <FlowGraphDate date={item.date} />,
        };

        return stepProps;
    });
};

