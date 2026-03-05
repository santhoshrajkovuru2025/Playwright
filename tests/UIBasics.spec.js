const { test, expect } = require('@playwright/test');

test.only('First test for the browser', async ({ browser }) => {

 
  const context = await browser.newContext();
  const page = await context.newPage();  
   const userName = page.locator('#username');
  const password = page.locator('#password');
  const signIn = page.locator('#signInBtn');
  const cardTitles = page.locator('.card-body .card-title a');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title())
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')

  // css , type and fill are the methods are used  to enter the data in the text boxes. But the fill() should be used compulsorly as type() is deprecated.

  await userName.fill('rahulshetty')
  await password.fill('Learning@830$3mK2')
  await signIn.click()
  console.log(await page.locator("[style*='block']").textContent()); // writing partial values we use *, ex: style*
  // Assertions:
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  // fill - mthod with empty data.
  await userName.fill('');
  await userName.fill('rahulshettyacademy')
  await signIn.click()
  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent()); // you can also write the first().
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles)
});

test('First test for the page', async ({ page }) => {
  
  await page.goto('https://www.google.com/');
  console.log(await page.title())
  await expect(page).toHaveTitle('Google')
});