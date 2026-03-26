
import { describe } from 'node:test'
import{test,expect} from '@playwright/test'


describe('To Test SauceLabs', ()=> {

    test('To Login to the SauceLabs Application', async({page})=> {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('//input[@id="user-name"]').fill('standard_user'); // Identifying locator using xpath
        await page.locator('#password').fill('secret_sauce');   // Identifying locator using css selector
        await page.locator('#login-button').click();
        console.log(await page.locator('.app_logo').textContent());
        await expect(page.locator('.app_logo')).toContainText('Swag Labs');
        await page.locator("text ='Sauce Labs Backpack'").click(); // Identifying locator using text
        await page.locator('id=add-to-cart').click();
        await page.locator('data-test=remove').click();
        });

});



