const { test, expect } = require('@playwright/test');

test('First test for the browser', async ({ browser }) => {

 
  const context = await browser.newContext();
  const page = await context.newPage();  

  // **/* means any url and .css now we are aborting the css related url in the below page.

  await page.route('**/*.css',route=>route.abort()); // it will stops css related thing in the browser

  // now blocking the images related files

  await page.route('**/*.{jpg,png,jpeg}',route=>route.abort());

  // to register all the calls in a page and prints 

  page.on('request', request=> console.log(request.url()));

  // to retrieve the status code for every call 

  page.on('response', response => console.log(response.url, response.status()));

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title())
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')

  // css , type and fill are the methods are used  to enter the data in the text boxes. But the fill() should be used compulsorly as type() is deprecated.

  await page.locator('#username').fill('rahulshetty')
  await page.locator('#password').fill('Learning@830$3mK2')
  await page.locator('#signInBtn').click()
  console.log(await page.locator("[style*='block']").textContent()); // writing partial values we use *, ex: style*
  // Assertions:
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  // fill - mthod with empty data.
  await page.locator('#username').fill('');
  await page.locator('#username').fill('rahulshettyacademy')
  await page.locator('#signInBtn').click()
  console.log(await page.locator('.card-body .card-title a').first().textContent());
  console.log(await page.locator('.card-body .card-title a').nth(1).textContent()); // you can also write the first().
  const allTitles = await page.locator('.card-body .card-title a').allTextContents();
  console.log(allTitles)
});

test('First test for the page', async ({ page }) => {
  
  await page.goto('https://www.google.com/');
  console.log(await page.title())
  await expect(page).toHaveTitle('Google')
});