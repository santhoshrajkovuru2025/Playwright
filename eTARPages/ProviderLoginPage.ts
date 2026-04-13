
import {Page, Locator} from '@playwright/test'

class ProviderLoginPage {

    page:Page;
    ProviderID:Locator;
    OwnerNum:Locator;
    userEmail:Locator;
    Environment:Locator;
    ShowrUrl:Locator;
    MedicalServices: Locator;
    CreateNewTAR:Locator;
    ProviderAddressSelection:Locator;
    


    constructor(page:Page){

        this.page = page;
        this.ProviderID = page.locator('#pname');
        this.OwnerNum= page.locator('#oname');
        this.userEmail = page.locator('#emailId');
        this.Environment = page.locator('#Environment');
        this.ShowrUrl = page.locator('#txt_ShowUrl');
        this.MedicalServices = page.locator('#LinkMedicalServices')
        this.CreateNewTAR = page.locator('[href*="Provider_Addrs_Sel.htm&CurrentPage=no_save&Upload=FALSE&CancelService=FALSE"]');
        this.ProviderAddressSelection = page.locator('[href*="Provider_Addrs_Sel&Location=001&ProviderNumber=1548201965&Owner=01"]')

    }

    async LoginTo(){
        await this.page.goto('https://silsr.softsol.com:6118/ProviderPortalSimulator?handler=login', {timeout: 60000 });
    }

    async LoginDetails(ProviderID:string,OwnerNum:string,userEmail:string){

        await this.ProviderID.pressSequentially(ProviderID);
        await this.OwnerNum.fill(OwnerNum);
        await this.userEmail.fill(userEmail);
        await this.Environment.selectOption('DEV');;
        await this.ShowrUrl.click();
        await this.MedicalServices.click();
        await this.CreateNewTAR.click();
        await this.ProviderAddressSelection.click();
        console.log(await this.page.title());
    }

}

export {ProviderLoginPage}