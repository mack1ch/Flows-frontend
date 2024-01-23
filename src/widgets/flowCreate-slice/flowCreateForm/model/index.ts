import { IFlowCategory } from "@/shared/interface/flow";

export const isNonEmptyArray = (value: any): value is any[] => {
    return Array.isArray(value) && value.length > 0;
};


export function getCategoryNameById(id: number | null, flowCategories: IFlowCategory[]): string | undefined {
    const category = flowCategories.find((cat) => cat.id === id);
    return category ? category.name : undefined;
}