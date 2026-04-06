import { expect } from "@playwright/test";

class OrdersReviewPage {

    constructor(page) {
        this.page = page;
        this.country = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submit = page.locator(".action__submit");
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async searchCountryAndSelect(countryCode, countryName) {
        await this.country.pressSequentially(countryCode);
        await this.dropdown.waitFor();

        const options = this.dropdown.locator("button");
        const optionsCount = await options.count();

        for (let i = 0; i < optionsCount; i++) {
            const text = await options.nth(i).textContent();
            if (text.trim() === countryName) {
                await options.nth(i).click();
                break;
            }
        }
    }

    async verifyEmailId(username) {
        await expect(this.emailId).toHaveText(username);
    }

    async submitAndGetOrderId() {
        await this.submit.click();
        await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
        const orderId = await this.orderId.textContent();
        return orderId.trim();
    }

}

export { OrdersReviewPage };