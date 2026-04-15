
// Actual Screenshot --> Stores and compares after taking another screenshot which is (expected screenshot)

import {test,expect} from '@playwright/test'

test('visual Testing',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://qa-practice.netlify.app/bugs-form.html')
    // maxDiffpixels is used to take screenshot with some to pass the test, the difference between the acual and expected screenshots.
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

});