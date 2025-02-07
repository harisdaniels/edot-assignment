import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page/home-page';

test("Verify that user is redirected to the correct Contact Us Page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
  await expect(page).toHaveTitle("eDOT Business : SFA, DMS, B2B E-Commerce dan Sewa Kendaraan untuk Semua Industri");

  await homePage.contactUsButton.click();
  await expect(page).toHaveTitle("Hubungi Customer Service eDOT Bisnis ");
});

test("Verify that user is redirected to the E work page from Home Page by clicking Product Dropdown", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
  await expect(page).toHaveTitle("eDOT Business : SFA, DMS, B2B E-Commerce dan Sewa Kendaraan untuk Semua Industri");

  await homePage.productsDropdown.click();
  await homePage.productsDropdown.waitFor({state: 'visible'});
  await homePage.eWorkLink.click();
  await expect(page).toHaveTitle("Your Sales Force Automation");
});

test("Verify that user is redirected to the Supermarket & Minimarket page from Home Page by clicking Industries Dropdown", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
  await expect(page).toHaveTitle("eDOT Business : SFA, DMS, B2B E-Commerce dan Sewa Kendaraan untuk Semua Industri");

  await homePage.industriesDropdown.click();
  await homePage.industriesDropdown.waitFor({state: 'visible'});
  await homePage.superMiniMarketLink.click();
  await expect(page).toHaveTitle("Supermarket & Minimarket");
});
