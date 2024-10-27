export let AUTH_TOKEN: string;

export function setApiAccessToken(newValue: string): void {
    AUTH_TOKEN = newValue;
}