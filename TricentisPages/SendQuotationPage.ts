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

    async getsendQuotation(email:string,phone:string,userName:string,password:string,Comments:string) {

        // To enter the Email at the Send Quote section.
        await this.email.fill(email)
        // To enter the Phone number at the Send Quote section.
        await this.phone.fill(phone);
        //  To enter the username at the Send Quote section.
        await this.userName.fill(userName);
        // To enter the password at the Send Quote section.
        await this.password.fill(password);
        // To enter the Confrm password at the Send Quote section.
        await this.confirmPassword.fill(password);
        // To enter the comments at the Send Quote section.
        await this.Comments.fill(Comments);
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