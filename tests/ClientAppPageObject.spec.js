import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../PageObjects/PageObjectManager';

test('Test Application for Client App', async ({ page }) => {

   const pageObjectManager = new PageObjectManager(page);

   const productName = 'ZARA COAT 3';
   const userName = 'srkovuru@outlook.com';
   const password = 'Ks@nthosh@123!';

   const loginPage = pageObjectManager.getLoginPage();
   const dashboardPage = pageObjectManager.getDashboardPage();
   const cartPage = pageObjectManager.getCartPage();
   const ordersReviewPage = pageObjectManager.getOrderReviewPage();
   const OrdersHistoryPage = pageObjectManager.getOrderHistoryPage();

   await loginPage.goTo();
   await loginPage.validLogin(userName, password);
   await dashboardPage.searchProductAddCart(productName);
   await dashboardPage.navigateToOrders();
   await cartPage.verifyProductIsDisplayed(productName);
   await cartPage.checkout();
   await ordersReviewPage.searchCountryAndSelect('ind', 'India');
   await ordersReviewPage.verifyEmailId(userName);

   const orderId = await ordersReviewPage.submitAndGetOrderId();
   console.log(orderId);

   await OrdersHistoryPage.searchOrderAndSelect(orderId);
   const historyOrderId = await OrdersHistoryPage.getOrderId();
   expect(orderId).toContain(historyOrderId);

});