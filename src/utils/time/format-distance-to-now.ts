import { formatDistanceToNow } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export const formatToNow = (time: string) => {
    const createdDate = new Date(time);
    return formatDistanceToNow(createdDate, { addSuffix: true });
};

export const formatUTC7Time = (time: string) => {
    return formatInTimeZone(new Date(time), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd HH:mm:ss ');
};
