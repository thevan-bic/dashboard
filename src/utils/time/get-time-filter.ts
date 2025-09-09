import dayjs from 'dayjs';

export const getTimeFilter = (createdFilter: '1hour' | '24hours' | '7days' | '30days'): number => {
    let createdFilterTime: number;

    switch (createdFilter) {
        case '1hour':
            createdFilterTime = dayjs().subtract(1, 'hour').unix();
            break;
        case '24hours':
            createdFilterTime = dayjs().subtract(24, 'hours').unix();
            break;
        case '7days':
            createdFilterTime = dayjs().subtract(7, 'days').unix();
            break;
        case '30days':
            createdFilterTime = dayjs().subtract(30, 'days').unix();
            break;
        default:
            createdFilterTime = dayjs().subtract(24, 'hours').unix();
            break;
    }
    return createdFilterTime;
};
