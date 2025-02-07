import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page/home-page';
import { ContactUsPage } from '../pages/contact-us-page/contact-us.page';
import { EWorkPage } from '../pages/products/e-work-page';
import { SupermarketMinimarketPage } from '../pages/industries/supermarket-minimarket';

test("Verify that user is redirected to the correct Contact Us Page successfully", async ({ page }) => {
  const homePage: HomePage = new HomePage(page);
  const contactUsPage: ContactUsPage = new ContactUsPage(page);

  await homePage.goTo();
  await expect(page).toHaveTitle("eDOT Business : SFA, DMS, B2B E-Commerce dan Sewa Kendaraan untuk Semua Industri");
  await homePage.contactUsButton.click();
  await expect(page).toHaveTitle("Hubungi Customer Service eDOT Bisnis ");
  expect(await contactUsPage.contactUsHeaderTitle.textContent()).toEqual("Contact Us");
});

test("Verify that user is redirected to the E work page from Home Page by clicking Product Dropdown successfully", async ({ page }) => {
  const homePage: HomePage = new HomePage(page);
  const eWorkPage: EWorkPage = new EWorkPage(page);

  await homePage.goTo();
  await expect(page).toHaveTitle("eDOT Business : SFA, DMS, B2B E-Commerce dan Sewa Kendaraan untuk Semua Industri");
  await homePage.productsDropdown.click();
  await homePage.productsDropdown.waitFor({ state: 'visible' });
  await homePage.eWorkLink.click();
  await expect(page).toHaveTitle("Your Sales Force Automation");
  expect(await eWorkPage.eWorkHeaderTitle.textContent()).toEqual("Your Sales Force Automation");
});

test("Verify that user is redirected to the Supermarket & Minimarket page from Home Page by clicking Industries Dropdown successfully", async ({ page }) => {
  const homePage: HomePage = new HomePage(page);
  const supermarketMinimarketPage: SupermarketMinimarketPage = new SupermarketMinimarketPage(page);

  await homePage.goTo();
  await expect(page).toHaveTitle("eDOT Business : SFA, DMS, B2B E-Commerce dan Sewa Kendaraan untuk Semua Industri");
  await homePage.industriesDropdown.click();
  await homePage.industriesDropdown.waitFor({ state: 'visible' });
  await homePage.superMiniMarketLink.click();
  await expect(page).toHaveTitle("Supermarket & Minimarket");
  expect(await supermarketMinimarketPage.supermarketMinimarketHeaderTitle.textContent()).toEqual("Optimize Your Operations, Expand Your Business");
});
