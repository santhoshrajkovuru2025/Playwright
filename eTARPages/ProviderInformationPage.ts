
import {Page, Locator} from '@playwright/test'

class ProviderInformationPage {

    page:Page;
    MedicareCert:Locator;
    ContactName:Locator;
    TARCompleted:Locator;
    PhoneAreaCode:Locator;
    PhoneAreaPrefix:Locator;
    PhoneAreaSuffix:Locator;
    PhoneExtension:Locator;
    ProviderInfoSubmit:Locator;
   

    constructor(page:Page){
    
        this.page = page;
        this.MedicareCert = page.locator('[name="MedCert"]');
        this.ContactName = page.locator('[name="txtProvContNme"]');
        this.TARCompleted = page.locator('input[name="txtTARCompBy"]');
        this.PhoneAreaCode = page.locator('[name="ContPhne_area"]');
        this.PhoneAreaPrefix = page.locator('[name="ContPhne_pre"]');
        this.PhoneAreaSuffix = page.locator('[name="ContPhne_sufx"]');
        this.PhoneExtension = page.locator('[name="ContPhne_ext"]');
        this.ProviderInfoSubmit = page.locator('input[name="Submit"]');
        

    }

    async ProviderInformation(contactName:string,TARCompleted:string,PhoneAreaCode:string,PhoneAreaPrefix:string,PhoneAreaSuffix:string,PhoneExtension:string,){

        await this.MedicareCert.check();
        await this.ContactName.fill(contactName);
        await this.TARCompleted.fill(TARCompleted);
        await this.PhoneAreaCode.fill(PhoneAreaCode);
        await this.PhoneAreaPrefix.fill(PhoneAreaPrefix);
        await this.PhoneAreaSuffix.fill(PhoneAreaSuffix);
        await this.PhoneExtension.fill(PhoneExtension);
        await this.ProviderInfoSubmit.click();
    };

}

export{ProviderInformationPage}