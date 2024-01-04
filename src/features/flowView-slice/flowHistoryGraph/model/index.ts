import { StepProps } from 'antd';

export const getLastTwoElementsArray = (
    arr: StepProps[],
    isShowFullArray: boolean = false,
): { newArray: StepProps[]; missed: number } => {
    if (isShowFullArray) return { newArray: arr, missed: 0 };
    else {
        const length = arr.length;
        const lastTwo = arr.slice(length - 2, length);
        const missed = length - 2;
        return { newArray: lastTwo, missed };
    }
};
