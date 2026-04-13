
import {Page,Locator,expect} from '@playwright/test';

class TARSubmissionPage{

    page:Page;
    submitTAR:Locator;
    SubmissionOption:Locator;
    submitTARLink:Locator;
    TCN:Locator;


    constructor(page:Page){

        this.page = page;
        this.submitTAR = page.locator("[href='surgewebservice?serviceName=surgewebservice&templateName=SetAttachmentsInd.htm&CurrentPage=Serv_Sel']");
        this.SubmissionOption = page.locator("[value='2']");
        this.submitTARLink = page.locator('#submit1');
        this.TCN = page.locator("//*[contains(text(),'TAR #')]");
        

    }

    async TARSubmission() {

        await this.submitTAR.click();
        await this.SubmissionOption.check();
        await expect(this.SubmissionOption).toBeChecked();
        await this.submitTARLink.click();
    }
    async getTARNumber() {

        const text = await this.TCN.textContent();
        return text?.split(':')?.[1]?.trim();
    }
    
}

export {TARSubmissionPage}

