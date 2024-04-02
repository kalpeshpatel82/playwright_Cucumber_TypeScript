import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test'
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2);

Given('I am on homepage', async function () {
    await fixture.page.goto(process.env.BASEURL);
});

When('I accept the cookies', async function () {
    // await page.frame("#cc_iframe1");
    // await page.waitForLoadState('domcontentloaded');
    await fixture.page.frameLocator("#cc_iframe1").getByText("Accepter les cookies").click();
});


Then('I click on each links of first primary megamenu and verify', async function () {

    const first_primary_link = fixture.page.locator("xpath=//div[contains(@class,'public-navigation-menu')]/ul/li[1]");
    const first_secondary_link = fixture.page.locator("xpath=//div[@id='la-banque-au-quotidien']//div[contains(@class,'flyout-links')]/ul/li/a");
    let index = await first_secondary_link.count();
    index = 3; //remove this line to click on all links 
        for (let i = 0; i < await index; i++) {
        await first_primary_link.click();
        await fixture.page.waitForLoadState('domcontentloaded');
        await first_secondary_link.nth(i).click();

    
        await fixture.page.waitForLoadState('domcontentloaded');

        // soft assert 
        expect.soft(await fixture.page.title()).not.toContain('404');
        expect.soft(await fixture.page.title()).not.toContain('Error');

        //  if ((await fixture.page.title()).includes("404") || (await fixture.page.title()).includes("Error")) {
        //          console.log("Failed Links : " + await fixture.page.title());
        //      }
        await fixture.page.goBack();
    }


});