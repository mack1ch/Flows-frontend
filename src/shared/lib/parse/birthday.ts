export function formatAgeFromString(birthDateStr: string): string {
    const birthYear = parseInt(birthDateStr.substring(0, 4));
    const now = new Date();
    const currentYear = now.getFullYear();
    const age = currentYear - birthYear;
    return `${age} ${pluralize(age, 'год', 'года', 'лет')}`;
}

export function pluralize(count: number, one: string, two: string, many: string): string {
    if (count % 10 === 1 && count % 100 !== 11) {
        return one;
    } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
        return two;
    } else {
        return many;
    }
}
