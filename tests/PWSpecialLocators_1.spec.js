
import {test,expect} from '@playwright/test'

test('Playwright Special Locators with ProtoCommerce App', async({browser})=>{

   const context=  await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://rahulshettyacademy.com/angularpractice/');
   await page.getByLabel('Check me out if you Love IceCreams!').check();
   await page.getByLabel('Employed').check();
   await page.getByLabel('Gender').selectOption('Female');
});