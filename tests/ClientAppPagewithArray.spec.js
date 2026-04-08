import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../PageObjects/PageObjectManager';
import PlaceOrderTestData2 from '../TestData/PlaceOrderTestData2.json';

const dataset = JSON.parse(JSON.stringify(PlaceOrderTestData2));

// this test is done by parameterization using multiple data sets.

for(const data of dataset){
test(`Test Client App Login for ${data.productName}`, async ({ page }) => {

   const pageObjectManager = new PageObjectManager(page);

   const loginPage = pageObjectManager.getLoginPage();
   const dashboardPage = pageObjectManager.getDashboardPage();
   const cartPage = pageObjectManager.getCartPage();
   const ordersReviewPage = pageObjectManager.getOrderReviewPage();
   const OrdersHistoryPage = pageObjectManager.getOrderHistoryPage();

   await loginPage.goTo();
   await loginPage.validLogin(data.userName, data.password);
   await dashboardPage.searchProductAddCart(data.productName);
   await dashboardPage.navigateToOrders();
   await cartPage.verifyProductIsDisplayed(data.productName);
   await cartPage.checkout();
   await ordersReviewPage.searchCountryAndSelect('ind', 'India');
   await ordersReviewPage.verifyEmailId(data.userName);

   const orderId = await ordersReviewPage.submitAndGetOrderId();
   console.log(orderId);

   await OrdersHistoryPage.searchOrderAndSelect(orderId);
   const historyOrderId = await OrdersHistoryPage.getOrderId();
   expect(orderId).toContain(historyOrderId);

});
};