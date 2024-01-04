export function parseTimeToRuFormat(input: string): string {
    const date = new Date(input);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
}

//  parseTimeToRuFormat(inputDateString); === 12:44
