import{test, expect} from '@playwright/test';
import { text } from 'stream/consumers';

test('UI Controls test',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");
        const userName = page.locator('#username');
        const userpassword = page.locator('#password');
            await userName.fill('rahulshettyacademy');
            await userpassword.fill('Learning@830$3mK2');
          // const signIn = page.locator('#signInBtn');
          // await signIn.click();
       const dropdown = page.locator('select.form-control');
       await dropdown.selectOption('consult');
        // await page.pause(); // using pause () in the playwright opens playwright inspesctor: it will display the execution flow.
        await page.locator('.radiotextsty').last().click();
        console.log(await page.locator('.radiotextsty').last().isChecked()); // returns true in the console.
        //await expect(page.locator('.radiotextsty').last()).toBeChecked();
        await page.locator('#okayBtn').click();
        await page.locator('#terms').click();
        await expect(page.locator('#terms')).toBeChecked();
        await page.locator('#terms').uncheck();
        expect(await page.locator('#terms').isChecked()).toBeFalsy();
        await expect(documentLink).toHaveAttribute('class','blinkingText');
    

});

test('child window handles',async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();
     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
     const userName = page.locator('#username'); 
     const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
     context.waitForEvent('page'), // listens any new page is to opens, promise -pending, reject, fulfilled
     documentLink.click(),
    ]); // opens new page

    const text = await newPage.locator('.red').textContent();
    const arrayText = text.split('@');
    const domain = arrayText[1].split(' ')[0]
    console.log(text);
    console.log(domain);
    await page.locator('#username').fill(domain);
    // await page.pause();
    // console.log(await page.locator('#username').textContent());
    console.log(await page.locator('#username').inputValue()); // retrieves the data when the page is not connected to the DOM.
});