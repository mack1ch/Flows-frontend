import { PageHeaderWithBackArray } from "@/shared/ui/pageHeaders-slice/backArray"
import { FlowCreateChoose } from "@/widgets/flowCreate-slice/flowCreateChoose"

export const ChoiceFlowScreen = () =>{
    return(<>
    <PageHeaderWithBackArray pageName="Новая заявка"/>
    <FlowCreateChoose/>
    </>)
}