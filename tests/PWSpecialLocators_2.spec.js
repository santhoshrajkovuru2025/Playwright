
import {test, expect} from '@playwright/test'

test('test the ProtoCommerce App with PW Special Locators', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await  page.goto('https://rahulshettyacademy.com/angularpractice/')
    // for checkbox using getByLabel
    await page.getByLabel('Check me out if you Love IceCreams!').check(); 
    // for Radio button using getByLabel
    await page.getByLabel('Employed').check(); 
    await page.getByLabel('Gender').selectOption('Female');
    // for entering text in the placeholder field by using getByPlaceholder.
    await page.getByPlaceholder('Password').fill('Abc@123!') 
    // for button click using getByRole method and selected 'button' option.
    await page.getByRole('button',{name:'Submit'}).click(); 
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
    // for clicking on a Link using getByRole method and selected 'link' option.
    await page.getByRole('link',{name : 'Shop'}).click(); 
    // chaining loactors by suing the locator, filter() and getByRole
    await page.locator('app-card').filter({hasText:'Blackberry'}).getByRole('button',{name:'Add'}).click();

})