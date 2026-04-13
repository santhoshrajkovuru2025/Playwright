
import { Page, Locator } from '@playwright/test';

class TARInquiryPage {

    page: Page;
    TARMainMenu:Locator;
    TARInquiryLink:Locator;
    TARNum:Locator;
    SubmitButton:Locator;
    TCNLink:Locator;
    

    constructor(page: Page) {

        this.page = page;
        this.TARMainMenu = page.locator('a[href = "surgewebservice?serviceName=surgewebservice&templateName=TARMain.htm&CurrentPage=reset_updateflag"]');
        this.TARInquiryLink = page.locator('[href="surgewebservice?&ServiceName=surgewebservice&TemplateName=Inquiry_Sel.htm&CurrentPage=no_save"]');
        this.TARNum = page.locator('[name="TarNum"]');
        this.SubmitButton = page.locator('[name="Submit"]');
        this.TCNLink = page.locator('a[href*="surgewebservice?serviceName=surgewebservice&templateName=Inquiry"]');


    }

    async TARInquiry(TCN:string){
        await this.TARMainMenu.click();
        await this.TARInquiryLink.click();
        await this.TARNum.pressSequentially(TCN);

        this.page.on('dialog', dialog=>{dialog.accept()});
        await this.SubmitButton.click();
        await this.TCNLink.click();
    }

}


export {TARInquiryPage}