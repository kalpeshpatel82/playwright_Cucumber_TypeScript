import {Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlayWrightWrapper";


export default class HomePage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        myCommunity: "//*[@id='iw_comp1665142834457']/div/div/div/div/div/div[1]/p[5]/a/span[2]",
    }

    async navigateToRegisterPage() {
        await this.base.goto(process.env.BASEURL)
    }

    async clickOnMyCommunityLink() {
        const pagePromise = this.page.context().waitForEvent('page');
        await this.base.waitAndClick(this.Elements.myCommunity);
        const newPage = await pagePromise;
        await newPage.waitForTimeout(3000);
        console.log("CHECK POINT 1 : " + await newPage.title());
    }

    async verifyIfUserNavigatesToMyCommunitySite() {
        // const pagePromise = await this.page.context().waitForEvent('page');
        // const newPage = await pagePromise;
        // await newPage.waitForTimeout(3000);
        // console.log("CHECK POINT 1 : " + await newPage.title());
    }
}
