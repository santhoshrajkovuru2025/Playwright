
import {Page,Locator} from '@playwright/test';

class ServiceInformationPage{

    page:Page;
    TARServices:Locator;
    ServiceCode:Locator;
    TotalUnits:Locator;
    FromDate:Locator;
    ThroughDate:Locator;
    AdmitDate:Locator;
    DischargeDate:Locator;
    ICD_CM_Type:Locator;
    ICD_Code:Locator;
    Date_of_Onset:Locator;
    Service_Information_Submit:Locator;

    constructor(page:Page){

        this.page = page;
        this.TARServices = page.locator('text = Hospital Days');
        this.ServiceCode = page.locator("input[name='ServiceCode']");
        this.TotalUnits = page.locator("[name='TotUnitsReq']");
        this.FromDate= page.locator("input[name='FromDate']");
        this.ThroughDate=page.locator("input[name='ThruDate']");
        this.AdmitDate = page.locator("input[name='AdmitDate']");
        this.DischargeDate=page.locator("input[name='DischDate']");
        this.ICD_CM_Type = page.locator("[name='Serv_ICDCodeType']");
        this.ICD_Code = page.locator("[name='Serv_ICD9_1']");
        this.Date_of_Onset = page.locator("input[name='Serv_DateOnset_1']");
        this.Service_Information_Submit= page.locator("input[name='Submit']");


    }

   async ServiceInformation(ServiceCode:string,FromDate:string,ThroughDate:string,AdmitDate:string,DischargeDate:string,ICD10Code:string,DateofOnset:string) {

        await this.TARServices.click();
        await this.ServiceCode.fill(ServiceCode);
        await this.TotalUnits.fill('1');
        // enter the from Date:
        await this.FromDate.fill('');
        await this.FromDate.fill(FromDate);
        // enter the Through Date:
        await this.ThroughDate.fill('');
        await this.ThroughDate.fill(ThroughDate);
        // enter the Admit Date:
        await this.AdmitDate.fill('');
        await this.AdmitDate.fill(AdmitDate);
        // enter the Discharge Date:
        await this.DischargeDate.fill('');
        await this.DischargeDate.fill(DischargeDate);
        // Drop-down for ICD - code 10
        await this.ICD_CM_Type.selectOption('ICD-10');
        await this.ICD_Code.fill(ICD10Code);
        // date of Onset:
        await this.Date_of_Onset.fill('');
        await this.Date_of_Onset.fill(DateofOnset); 
        // Clicking on Submit button at Service page
        await this.Service_Information_Submit.click();
    }

}

export {ServiceInformationPage}