import { Locator, Page } from "@playwright/test";

export class EWorkPage {
	readonly page: Page;
	readonly eWorkHeaderTitle: Locator;
	

	constructor(page: Page) {
		this.page = page;
		this.eWorkHeaderTitle = page.locator("css=div h1");
	}
}