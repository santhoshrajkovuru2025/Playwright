import { test, expect } from '@playwright/test';

test('Test Application for Client App', async ({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   const email = 'srkovuru@outlook.com';
   const userName = page.getByPlaceholder('email@example.com');
   const userpassword = page.getByPlaceholder('enter your passsword');
   const signIn = page.getByRole('button',{name:'Login'});
   const products = page.locator('.card-body');
   const card = page.locator("input[type='text']");
   const coupon = page.getByRole('button',{name:'Apply Coupon'})
   const orderid = page.locator('.em-spacer-1 .ng-star-inserted')
   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   // Enter the Email
   await userName.fill(email);
   // Enter the Password
   await userpassword.fill('Ks@nthosh@123!');
   // Sign in to the Application
   await signIn.click();
   // waits until the network calls loaded
   await page.waitForLoadState('networkidle');
   // Another way to networkidle
    await page.locator('.card-body b').first().waitFor();
    // Adding the Item to Cart
    await products.filter({hasText:'ZARA COAT 3'}).getByRole('button',{name:' Add To Cart'}).click();
    // Click the Cart button to verify the item to the list
    await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click();
    // Waiting for the added item to display.
    await page.locator("div li").first().waitFor();
    // Verifying to the item is displayed correctly
    await expect(page.getByText('ZARA COAT 3')).toBeVisible();// pseudo class.
    //To click the 'Checkout' button
  await page.getByRole("button",{name:'Checkout'}).click();
  await card.nth(0).fill('')
  await card.nth(0).fill('5123456789012346')
  await card.nth(1).fill('4545')
  await card.nth(2).fill('Rahul')
 /*  await card.nth(3).fill('rahulshettyacademy')
  await coupon.click(); */
  // Entering text in dynamic drop-down text field.
  await page.getByPlaceholder('Select Country').pressSequentially('Ind',{delay:150});
  // Clicking on option
  await page.getByRole('button',{name:'India'}).nth(1).click();
  // Verifying the email is correct or not
  expect (page.locator(".user__name [type='text']").first()).toHaveText(email);
  // Placing the order
      await page.getByText('PLACE ORDER').click();
      await expect (page.getByText('Thankyou for the order.')).toBeVisible();
      const orderID= await orderid.textContent();
      console.log(orderID)
     await page.getByRole('button',{name:'ORDERS'}).click();
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
  await page.pause();
});
