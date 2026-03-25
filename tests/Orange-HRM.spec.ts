
import { describe } from 'node:test'
import {test, expect} from '@playwright/test'


describe('To Test Orange HRM Application', ()=>{

    test('Login to the Orange HRM Application', async({browser})=>{

       const context = await browser.newContext();
       const page = await context.newPage();

       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       await page.locator("[name='username']").fill('admin');
       await page.locator("[name='password']").fill('admin123');
       await page.locator('.oxd-button').click();
       await expect(page).toHaveTitle('OrangeHRM');
        
    });

});