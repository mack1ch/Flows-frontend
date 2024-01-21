export const isNonEmptyArray = (value: any): value is any[] => {
    return Array.isArray(value) && value.length > 0;
};