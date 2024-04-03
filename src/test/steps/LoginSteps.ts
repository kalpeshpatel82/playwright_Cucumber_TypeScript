import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test'
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2);

When('I click on login button', async function () {
    await fixture.page.locator("xpath=//li/a[contains(@class,'btn-primary') and contains(@href,'logon')]").click();
    fixture.logger.info("Clicking on login button.");

});

Then('I navigate to login page', async function () {
    const pageUrl = fixture.page.url();
    console.log(pageUrl);
    expect(pageUrl).toContain('generic/logon');
    fixture.logger.info("Verifying if navigating to login page.");

});