import { Page } from "@playwright/test";
import { Logger } from "tslog";

abstract class BasePage {
    protected page: Page;
    logger: Logger = new Logger({ name: BasePage.name });

    constructor(page: Page) {
        this.page = page;
    }
    public openPage = async (url: string) => {
        await this.logger.info(`I open the page: ${url}`)
        await this.page.goto(url)
    }

}

export default BasePage
