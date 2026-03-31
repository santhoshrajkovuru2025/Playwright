import { test, expect } from '@playwright/test';

test('Test Application for Client App', async ({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   const coupon = page.locator(".field  .btn");
   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   await page.locator('#userEmail').fill('srkovuru@outlook.com');
   await page.locator('#userPassword').fill('Ks@nthosh@123!');
   await page.locator('#login').click();
   // waits until the network calls loaded
   await page.waitForLoadState('networkidle');
   // Another way to networkidle
   await page.locator('.card-body b').first().waitFor();
  const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count = await page.locator('.card-body').count();
    for (let i =0;i<count;i++)
      {
       if(await page.locator('.card-body').nth(i).locator('b').textContent() === 'ZARA COAT 3') // locator chained to identifiy the element easily by adding locator('b') here.
        {
            // add the product to the cart
            await page.locator('.card-body').nth(i).locator("text=  Add To Cart").click();
            break;
        }
    }
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();// pseudo class.
  expect(bool).toBeTruthy();
  await page.locator("button[type ='button']").last().click();
  await page.locator("input[type='text']").nth(0).fill('')
  await page.locator("input[type='text']").nth(0).fill('5123456789012346')
  await page.locator("input[type='text']").nth(1).fill('4545')
  await page.locator("input[type='text']").nth(2).fill('Rahul')
/*   await card.nth(3).fill('rahulshettyacademy')
  await coupon.click(); */
  await page.locator("[placeholder='Select Country']").pressSequentially('Ind',{delay:150});
  const dropdown = page.locator(".form-group .ta-results");
  await dropdown.waitFor();
  const optionsCount= await dropdown.locator('button').count();
  for(let i=0;i<=optionsCount;i++) {
      const text = await dropdown.locator('button').nth(i).textContent();
      if(text === ' India') {
          // click operation should be performed
          await dropdown.locator('button').nth(i).click();
          break;
      }
  }
  expect (page.locator(".user__name [type='text']").first()).toHaveText('srkovuru@outlook.com');
      await page.locator('.action__submit').click();
      await expect (page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
      const orderID= await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
      console.log(orderID)
     await page.locator('button[routerlink="/dashboard/myorders"]').click();
     await page.locator('tbody').waitFor();
     const orderRows= await page.locator('tbody tr');
     for(let i=0;i<=await orderRows.count();++i){
        const rowOrderId = await orderRows.nth(i).locator('th').textContent();
        if(orderID.includes(rowOrderId)){
            await orderRows.nth(i).locator('button').first().click();
            break;
        }
     }
     const OrderIdDetails = await page.locator('.col-text').textContent();
     expect(orderID.includes(OrderIdDetails)).toBeTruthy;
  
});
