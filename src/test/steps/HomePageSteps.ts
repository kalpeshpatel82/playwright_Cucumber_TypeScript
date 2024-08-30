import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import {expect} from '@playwright/test'
import {fixture} from "../../hooks/pageFixture";
import Assert from '../../helper/wrapper/assert';
import LoginPage from '../../pages/loginPage';
import HomePage from '../../pages/homePage';

setDefaultTimeout(60 * 1000 * 2);
let loginPage: LoginPage;
let homepage: HomePage;
let assert: Assert;

Given('I am on homepage', async function () {
    loginPage = new LoginPage(fixture.page);
    assert = new Assert(fixture.page);
    homepage = new HomePage(fixture.page);
    await homepage.navigateToRegisterPage();
    fixture.logger.info("Navigated to the application.");
});

When('I accept the cookies', async function () {
    // await page.frame("#cc_iframe1");
    // await page.waitForLoadState('domcontentloaded');
    fixture.logger.info("Clicking on Cookies consent CTA button.");
    await fixture.page.frameLocator("#cc_iframe1").locator("xpath=//*[@id='cookies_all_accept_btn']").click();
});

Then('I click on each links of first primary megamenu and verify', async function () {
    const first_primary_link = fixture.page.locator("xpath=//div[contains(@class,'public-navigation-menu')]/ul/li[1]");
    const first_secondary_link = fixture.page.locator("xpath=//div[@id='la-banque-au-quotidien']//div[contains(@class,'flyout-links')]/ul/li/a");
    let index = await first_secondary_link.count();
    index = 3; //remove this line to click on all links 
    for (let i = 0; i < await index; i++) {
        await first_primary_link.click();
        fixture.logger.info("Clicking on First primary mega menu link.");
        await fixture.page.waitForLoadState('domcontentloaded');
        await first_secondary_link.nth(i).click();
        fixture.logger.info("Clicking on First secondary mega menu link : " + i);
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

When('I click on my community link', async function () {
    await homepage.clickOnMyCommunityLink();
});

Then('I verify user navigates to my community site', async function () {
    await homepage.verifyIfUserNavigatesToMyCommunitySite();
});

When('I click on open an account cta button', async function () {
  
})



