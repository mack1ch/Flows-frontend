export function formatAgeFromString(birthDateStr: string): string {
    const birthDate: Date = new Date(birthDateStr);
    const currentDate: Date = new Date();
    let age: number = currentDate.getFullYear() - birthDate.getFullYear();
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return `${age.toString()} ${pluralize(age, 'год', 'года', 'лет')}`;
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
