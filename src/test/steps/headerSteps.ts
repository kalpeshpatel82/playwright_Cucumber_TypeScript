import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import {expect} from '@playwright/test'
import {fixture} from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2);

When('I click on language switcher', async function () {
    await fixture.page.locator("//*[contains(@class,'language-menu')]").click();
    fixture.logger.info("Clicking on language switcher.");
});

Then('Language switcher should be visible', async function () {
    await fixture.page.locator("//*[@id='iw_comp1665142834152']/div/div/div[1]/div/div/div[3]/ul/li[3]/div/div").isVisible();
    fixture.logger.info("Checking if language switcher is visible.");
});

Then('I select langauage from dropdown', async function () {
    await fixture.page.locator("//*[@id='iw_comp1665142834152']/div/div/div[1]/div/div/div[3]/ul/li[3]/div/div/a").click();
    fixture.logger.info("Clicking on language to switch.");
});

Then('I verify if langauage is changed', async function () {
    expect(await fixture.page.title()).toContain("Particulieren ");
    fixture.logger.info("Verifying if language is changed.");
});