import globalLogger from '@/lib/logger/global';
import { isObject, message } from '@/utils';

export async function handleErrorResponse(response: Response) {
    try {
        const data = await response.clone().json();

        if (isObject(data)) {
            const json = data as { errorMsg?: string; message?: string; error?: string };

            message.error(json.errorMsg || json.message || json.error || response.statusText);
        } else {
            message.error(response.statusText);
        }
    } catch (e) {
        globalLogger.error('Error parsing JSON:', e as any);

        globalLogger.error(response.statusText);
    }

    return response;
}
