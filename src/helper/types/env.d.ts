export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit" | "chrome-device",
            ENV: "staging" | "prod" | "test",
            BASEURL: string,
            HEAD: "true" | "false",
            LANG: "fr" | "nl",
            OS: "windows" | "mac",
        }
    }
}