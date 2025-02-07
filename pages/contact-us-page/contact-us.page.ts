import { Locator, Page } from "@playwright/test";

export class ContactUsPage {
	readonly page: Page;
	readonly contactUsHeaderTitle: Locator;
	

	constructor(page: Page) {
		this.page = page;
		this.contactUsHeaderTitle = page.locator("css=article h1 strong");
	}
}