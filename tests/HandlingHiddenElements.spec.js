
import{test,expect} from '@playwright/test'

test('Handling Hidden Elements',async({browser})=>{
    
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
/*     await page.goto('https://www.google.com') // navigating to google.com
    await page.goBack(); // Navigating back to Rahul Shetty Academy
    await page.goForward(); // Navigating to google page again. */

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
});