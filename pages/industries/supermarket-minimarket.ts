import { Locator, Page } from "@playwright/test";

export class SupermarketMinimarketPage {
	readonly page: Page;
	readonly supermarketMinimarketHeaderTitle: Locator;
	

	constructor(page: Page) {
		this.page = page;
		this.supermarketMinimarketHeaderTitle = page.locator("css=section div div div h1");
	}
}