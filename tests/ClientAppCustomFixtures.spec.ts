
import {customTest} from '../TestData-TS/testbase';
import { expect } from '@playwright/test';
import { PageObjectManager } from '../PageObjects-TS/PageManager';
 // const dataset = JSON.parse(JSON.stringify(PlaceOrderTestData));
// console.log('customTest:', customTest);
customTest('Test Application for Client App', async ({ page,testDataForOrder }) => {

   const pageObjectManager = new PageObjectManager(page);

   const loginPage = pageObjectManager.getLoginPage();
   const dashboardPage = pageObjectManager.getDashboardPage();
   const cartPage = pageObjectManager.getCartPage();
   const ordersReviewPage = pageObjectManager.getOrderReviewPage();
   const OrdersHistoryPage = pageObjectManager.getOrderHistoryPage();

   await loginPage.goTo();
   await loginPage.validLogin(testDataForOrder.userName, testDataForOrder.password);
   await dashboardPage.searchProductAddCart(testDataForOrder.productName);
   await dashboardPage.navigateToOrders();
   await cartPage.verifyProductIsDisplayed(testDataForOrder.productName);
   await cartPage.checkout();
   await ordersReviewPage.searchCountryAndSelect('ind', 'India');
   await ordersReviewPage.verifyEmailId(testDataForOrder.userName);

   const orderId:any = await ordersReviewPage.submitAndGetOrderId();
   console.log(orderId);

   await OrdersHistoryPage.searchOrderAndSelect(orderId);
   const historyOrderId:any = await OrdersHistoryPage.getOrderId();
   expect(orderId).toContain(historyOrderId);

});