const requrieEnv = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(
            `Environment variable ${key} is required but not defined.`,
        );
    }
    return value;
};

export const env = {
    API_KEY: requrieEnv("API_KEY"),
    API_URL: requrieEnv("API_URL"),
};
