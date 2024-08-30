import { LaunchOptions, chromium, expect, firefox, webkit } from "@playwright/test";

const optionsFR: LaunchOptions = {
    headless: !true,
    args: ["--accept-lang=fr", "--start-maximized"],
    slowMo: 1000,
}

const optionsNL: LaunchOptions = {
    headless: !true,
    args: ["--accept-lang=NL"],
    slowMo: 1000,
}

export const invokeBrowser = () => {
    const browserType = process.env.BROWSER;

    if (process.env.OS == 'windows') {
        var exePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
    } else {
        var exePath = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
    }


    if (process.env.LANG == 'fr') {
        switch (browserType) {
            case "chrome":
                return chromium.launch(optionsFR);
            case "firefox":
                return firefox.launch(optionsFR);
            case "webkit":
                return webkit.launch(optionsFR);
            case "chrome-device":
                return chromium.launch({
                    headless: false,
                    executablePath: exePath,
                });
            default:
                throw new Error("Please set the proper browser!")
        }
    }

    if (process.env.LANG == 'nl') {
        switch (browserType) {
            case "chrome":
                return chromium.launch(optionsNL);
            case "firefox":
                return firefox.launch(optionsNL);
            case "webkit":
                return webkit.launch(optionsNL);
            default:
                throw new Error("Please set the proper browser!")
        }
    }
}