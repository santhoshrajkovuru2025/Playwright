import {Page} from '@playwright/test'
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { CartPage } from "./CartPage";
import { OrdersReviewPage } from "./OrdersReviewPage";
import { OrdersHistoryPage } from "./OrdersHistoryPage";

class PageObjectManager {

    page:Page;
    loginPage :LoginPage; // (LoginPage type is object for loginPage)
    dashboardPage: DashboardPage;
    cartPage:CartPage;
    ordersReviewPage:OrdersReviewPage;
    ordersHistoryPage:OrdersHistoryPage;

    constructor(page:Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getOrderReviewPage() {
        return this.ordersReviewPage;
    }

    getOrderHistoryPage() {
        return this.ordersHistoryPage;
    }

}

export { PageObjectManager };