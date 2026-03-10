
import {test,expect} from '@playwright/test'

test('handling Alert Messages',async({browser})=>{

    const context =  await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // To Accept the Confirm Alert pop-up message.
   // page.on('dialog',dialog=>dialog.accept());
   // To Cancel the Confirm Alert pop-up message.
   page.on('dialog',dialog=>dialog.dismiss());
    await page.locator('#confirmbtn').click();

});

test('Capture Screenshots and Visual Comparision', async({page})=>{


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    // To take a screenshot for loactor or partially
    await page.locator('#displayed-text').screenshot({path:'partialscreenshot.png'});
    await page.locator('#hide-textbox').click();
    // To take screenshot completely
    await page.screenshot({path:'pagescreenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();

});



