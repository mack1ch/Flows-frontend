export function parseDateToDotFormate(inputDateString: string): string {
    const date = new Date(inputDateString);
    const outputDateString = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    return outputDateString;
}
//  parseDateToDotFormate(inputDateString); === 14.11.2011

export function parseDateToTextFormate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('ru-RU', options);
}

//  parseDateToTextFormate(inputDateString); === 14 ноября
