const requireEnv = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(
            `Environment variable ${key} is required but not defined.`,
        );
    }
    return value;
};

export const env = {
    API_KEY: requireEnv("API_KEY"),
    API_URL: requireEnv("API_URL"),
};
