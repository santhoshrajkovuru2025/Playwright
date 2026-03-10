
// Actual Screenshot --> Stores and compares after taking another screenshot which is (expected screenshot)

import {test,expect} from '@playwright/test'

test.only('visual Testing',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/')
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

});