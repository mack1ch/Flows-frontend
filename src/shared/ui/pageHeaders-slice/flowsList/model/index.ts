const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
});

export const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
