import { Page, expect,Locator } from '@playwright/test';

class CartPage {

    page:Page;
    cartProducts:Locator;
    productsText:Locator;
    cart:Locator
    orders:Locator;
    checkoutButton:Locator

    constructor(page:Page) {
        this.page = page;
        this.cartProducts = page.locator("div li");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']").first();
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkoutButton = page.locator("text=Checkout");
    }

    async verifyProductIsDisplayed(productName:string) {
        await this.cart.click();
        await this.cartProducts.first().waitFor();
        await expect(this.getProductLocator(productName)).toBeVisible();
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    getProductLocator(productName:string) {
        return this.page.locator(`h3:has-text('${productName}')`);
    }

}

export { CartPage };