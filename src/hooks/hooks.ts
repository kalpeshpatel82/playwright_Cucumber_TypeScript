import { BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from '@playwright/test';
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";


let browser: Browser;
let context: BrowserContext;

//let page: Page;
BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
    //browser = await chromium.launch({ headless: false });

})

Before(async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    fixture.page = page;
})

AfterStep(async function ({ pickle, result }) {

    //Screenshot after every steps -- uncomment following lines 

    let img: Buffer;
    console.log(result?.status);

    img = await fixture.page.screenshot(
        { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img, "image/png");

})

After(async function ({ pickle, result }) {

    // Screenshot in case of Scenario fails
    let img: Buffer;
    console.log(result?.status);
    if (result?.status == Status.FAILED) {
        img = await fixture.page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        await this.attach(img, "image/png");
    }


    //Close browser Session 
    await fixture.page.close();
    await context.close();
})

AfterAll(async function () {
    //Close browser completely 
    await browser.close();
})
