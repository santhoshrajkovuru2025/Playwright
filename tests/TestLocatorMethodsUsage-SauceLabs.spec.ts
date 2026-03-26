
import {describe} from 'node:test'
import {test,expect} from '@playwright/test'

describe('To Test Locator Methods with Options', () => {

    test('Testing Locator Methods', async({page})=> {

        await page.goto('https://www.saucedemo.com/');

        //using has option : Identifies the locator using the has option and clicks it. As the class name 'form_group' has common for username and password.
        await page.locator('.form_group',{has:page.locator('input#user-name')}).click(); 
        // Enters the data in the username field sequentially.
        await page.locator('.form_group',{has:page.locator('input#user-name')}).pressSequentially('standard_user');

        // Using hasNot option: for password.
        await page.locator('.form_group',{hasNot:page.locator('input#user-name')}).click(); 
        await page.locator('.form_group',{hasNot:page.locator('input#user-name')}).pressSequentially('secret_sauce');

        // Click on Login button
        await page.locator('.submit-button').click();

        // identifying the locator with hasText option
        // await page.locator('//a',{hasText:'Sauce Labs Bike Light'}).click();

        // identifying the locator using the hasNot text option, / text/ is regular expression and * is used for remaning text 
        await page.locator('.inventory_item_name ',{hasNotText:/Sauce.*/}).click();

    });
});