export const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

export function pluralizeWord(value: number, words: string[]) {
    const newValue = Math.abs(value) % 100;
    const num = newValue % 10;
    if (newValue > 10 && newValue < 20) return value.toString() + " " + words[2];
    if (num > 1 && num < 5) return value.toString() + " " + words[1];
    if (num == 1) return value.toString() + " " + words[0];
    return value.toString() + " " + words[2];
}
