import { Locator, Page } from "@playwright/test";

export class HomePage {
	readonly page: Page;
	readonly productsDropdown: Locator;
	readonly productList: Locator;
	readonly industriesDropdown: Locator;
	readonly industriesList: Locator;
	readonly articlesButton: Locator;
	readonly referralButton: Locator;
	readonly tryForFreeButton: Locator;
	readonly contactUsButton: Locator;
	readonly eWorkLink: Locator;
	readonly superMiniMarketLink: Locator;

	constructor(page: Page) {
		this.page = page;
		this.productsDropdown = page.locator("//button[normalize-space(text())='Products']");
		this.industriesDropdown = page.locator("//button[normalize-space(text())='Industries']");
		this.articlesButton = page.locator("(//a[contains(@href, '/articles')])[1]");
		this.referralButton = page.locator("//a[contains(text(), 'Referral')]");
		this.tryForFreeButton = page.locator("//button[normalize-space(text())='Try for Free']");
		this.contactUsButton = page.locator("(//a[contains(@href, '/contact-us')])[1]");
		this.productList = page.locator("li[role='menuitem'] span ul");
		this.eWorkLink = page.locator("(//ul/li/div/div/a[contains(@href, '/products/ework')])[1]");
		this.industriesList = page.locator("li[role='menuitem'] span ul ul");
		this.superMiniMarketLink = page.locator("//ul/li/ul/li/a[contains(@href, '/industries/supermarket')]");
	}

	async goTo() {
    await this.page.goto("https://edot.id/");
  }
}