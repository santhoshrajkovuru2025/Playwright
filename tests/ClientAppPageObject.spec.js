import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../PageObjects/PageObjectManager';
import PlaceOrderTestData from '../Test-Data/PlaceOrderTestData.json';

const dataset = JSON.parse(JSON.stringify(PlaceOrderTestData));

test('Test Application for Client App', async ({ page }) => {

   const pageObjectManager = new PageObjectManager(page);

   const loginPage = pageObjectManager.getLoginPage();
   const dashboardPage = pageObjectManager.getDashboardPage();
   const cartPage = pageObjectManager.getCartPage();
   const ordersReviewPage = pageObjectManager.getOrderReviewPage();
   const OrdersHistoryPage = pageObjectManager.getOrderHistoryPage();

   await loginPage.goTo();
   await loginPage.validLogin(dataset.userName, dataset.password);
   await dashboardPage.searchProductAddCart(dataset.productName);
   await dashboardPage.navigateToOrders();
   await cartPage.verifyProductIsDisplayed(dataset.productName);
   await cartPage.checkout();
   await ordersReviewPage.searchCountryAndSelect('ind', 'India');
   await ordersReviewPage.verifyEmailId(dataset.userName);

   const orderId = await ordersReviewPage.submitAndGetOrderId();
   console.log(orderId);

   await OrdersHistoryPage.searchOrderAndSelect(orderId);
   const historyOrderId = await OrdersHistoryPage.getOrderId();
   expect(orderId).toContain(historyOrderId);

});