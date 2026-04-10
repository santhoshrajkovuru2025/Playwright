
import { test, expect } from '@playwright/test'

test.describe('Frames Handling in Playwright', () => {

   test('Handling MouseHover and iFrames', async ({ browser }) => {

      const Context = await browser.newContext();
      const page = await Context.newPage();

      await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      // To mousehover on the button.
      await page.locator('#mousehover').hover();
      // to mousehover and click on the available options.
      await page.locator(".mouse-hover-content >> text='Top'").click();
      // To handle Frames
      const framespage = page.frameLocator('#courses-iframe');
      await framespage.locator("li a[href*='lifetime-access']:visible").click();
      const frametext = await framespage.locator('.text h2').textContent();
      console.log(frametext.split(' ')[1]);

   });
   test('iFrame Handling in the QA Netfly Website', async ({ page }) => {

      await page.goto('https://qa-practice.netlify.app/iframe');

      const FPage = page.frameLocator('#iframe-checkboxes');

      await FPage.locator('#learn-more').click();
      const Text = await FPage.locator('#show-text').textContent();
       expect(Text.trim()).toBe('This text appears when you click the "Learn more" button');
      console.log(Text);
      
   });
});
