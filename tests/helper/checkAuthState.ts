import { existsSync, readFileSync } from 'fs';

export function isAuthStateAvailable(): boolean {
    const filePath = '../../playwright/.auth/user.json';
    if (!existsSync(filePath)) return false;

    try {
        const data = readFileSync(filePath, 'utf-8');
        console.log(data);
        return true
    } catch (error) {
        console.error(error);
        return false;
    }
}
