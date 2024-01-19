export function parseDateToDotFormat(inputDateString: Date): string {
    const date = new Date(inputDateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const outputDateString = `${day}.${month}.${year}`;
    return outputDateString;
}

//  parseDateToDotFormate(inputDateString); === 14.11.2011

export function parseDateToTextFormate(dateString: Date): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('ru-RU', options);
}

//  parseDateToTextFormate(inputDateString); === 14 ноября
