
// For API Request we have to add the 'request' in the import command
import {test,expect,request} from '@playwright/test'
import { API_Utils } from './utils/APIutils';

// Created a loginPayLoad variable to store the username and password
const loginPayLoad = {
    userEmail: "srkovuru@outlook.com", 
    userPassword: "Ks@nthosh@123!"
}

const orderPayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]
}
// Declared 'jsonToken'and 'orderId' as global variable to use in another tests also.

let response;
test.beforeAll( async()=>{

     const apiContext = await request.newContext();
     const api_utils = new API_Utils(apiContext,loginPayLoad);
     response = await api_utils.CreateOrder(orderPayload);

    });

test('To Place the Order in the Client App using API Call', async ({page})=>{

    await page.addInitScript(value =>{

        window.localStorage.setItem('token',value);
    }, response.jsonToken);
    
     await page.goto('https://rahulshettyacademy.com/client/');
     await page.locator('button[routerlink="/dashboard/myorders"]').click();
     await page.locator('tbody').waitFor();
     const orderRows=  page.locator('tbody tr');
     for(let i=0;i<=await orderRows.count();++i){
        const rowOrderId = await orderRows.nth(i).locator('th').textContent();
        if(response.orderID.includes(rowOrderId)){
            await orderRows.nth(i).locator('button').first().click();
            break;
        }
     }
     const OrderIdDetails = await page.locator('.col-text').textContent();
     expect(response.orderID.includes(OrderIdDetails)).toBeTruthy;
  
});


