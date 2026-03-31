
import { test,expect } from '@playwright/test'

test('Security Test Request interception', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    // Login and reach untill the orders page.

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('srkovuru@outlook.com');
    await page.locator('#userPassword').fill('Ks@nthosh@123!');
    await page.locator('#login').click();

    // waits until the network calls loaded
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    // using * indicates that irrespective of id we can test, so that even though id changes the pattern will be remembered by playwright to throw an fake request to the server.
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }));

    // continue (): is used to intercept the request calls

    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator('p.blink_me')).toHaveText('You are not authorize to view this order');
    console.log(await page.locator('p.blink_me').textContent());
    
});