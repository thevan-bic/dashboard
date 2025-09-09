export const getShortHash = (hash: string): string => {
    return hash?.length >= 10 ? `${hash.slice(0, 5)}...${hash.slice(-5)}` : hash;
};

export const getShortString = (str: string, len = 30): string => {
    return str?.length >= len ? `${str.slice(0, len)}...${str.slice(-len)}` : str;
};
