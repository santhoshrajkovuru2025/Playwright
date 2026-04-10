import { Page,Locator } from "@playwright/test";

class DashboardPage {

    page:Page;
    products :Locator;
    productsText: Locator;
    cart: Locator;
    orders:Locator;

    constructor(page:Page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
    }

    async searchProductAddCart(productName:string) {
        await this.products.first().waitFor();
        console.log(await this.productsText.allTextContents());
        const count = await this.products.count();
        let productFound = false;

        for (let i = 0; i < count; i++) {
            const title:any = await this.products.nth(i).locator("b").textContent();

            if (title.trim() === productName) {
                await this.products.nth(i).locator("text=Add To Cart").click();
                productFound = true;
                break;
            }
        }

        if (!productFound) {
            throw new Error(`Product "${productName}" not found in the dashboard.`);
        }
    }

    async navigateToOrders() {
        await this.orders.click();
    }

    async navigateToCart() {
        await this.cart.click();
    }

}

export { DashboardPage };