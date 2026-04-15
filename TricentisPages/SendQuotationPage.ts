import {Page, Locator, expect} from '@playwright/test';

class sendQuotationPage {

    page: Page;
    email: Locator;
    phone: Locator;
    userName: Locator;
    password: Locator;
    confirmPassword: Locator;
    Comments: Locator;
    SendEmailButton: Locator;
    confirmAlert: Locator;
    confirmButton: Locator;


    constructor(page:Page) {

        this.page = page;
        this.email = page.locator('#email');
        this.phone = page.locator('#phone');
        this.userName = page.locator('#username');
        this.password = page.locator('#password');
        this.confirmPassword = page.locator('#confirmpassword');
        this.Comments = page.locator('#Comments');
        this.SendEmailButton = page.locator('#sendemail');
        this.confirmAlert = page.locator('.showSweetAlert');
        this.confirmButton = page.locator('.confirm');

    }

    async getsendQuotation() {

        // To enter the Email at the Send Quote section.
        await this.email.fill('swaroopreddy.y@softsol.com')
        // To enter the Phone number at the Send Quote section.
        await this.phone.fill('9814512121');
        //  To enter the username at the Send Quote section.
        await this.userName.fill('swaroop19');
        // To enter the password at the Send Quote section.
        await this.password.fill('Swaroop@123!');
        // To enter the Confrm password at the Send Quote section.
        await this.confirmPassword.fill('Swaroop@123!');
        // To enter the comments at the Send Quote section.
        await this.Comments.fill('The above Insurance Details are verified for Automobile. Further Processing details will be shared soon');
        // to click on the send button at the Send Quote section.
        await this.SendEmailButton.click();
        await this.page.waitForLoadState();
        // To click on the 'OK' button at the Send Quote section.
        console.log(await this.confirmAlert.textContent());
        await expect(this.confirmAlert).toBeVisible();
        await this.confirmButton.click();

    }

}


export {sendQuotationPage}