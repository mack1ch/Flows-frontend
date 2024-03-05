export function isURL(str: string): boolean {
    const urlPattern: RegExp =
        /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[\w\d-._~:/?#[\]@!$&'()*+,;=%]*)?$/;
    return urlPattern.test(str);
}
