import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlayWrightWrapper";

export default class LoginPage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
       
    }

}