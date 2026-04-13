
import{Page,Locator,expect} from '@playwright/test';

class PatientInformationPage {

    page:Page;
    MedicalID: Locator;
    PatientLastName:Locator;
    PatientFirstName:Locator;
    PatientDOB:Locator;
    Gender:Locator;
    PatientSubmission:Locator;

    constructor (page:Page){

        this.page = page;
        this.MedicalID =page.locator('input[name="MedicalID"]')
        this.PatientLastName = page.locator('input[name="PatLstNme"]');
        this.PatientFirstName= page.locator('input[name="PatFrstNme"]');
        this.PatientDOB=page.locator('input[name="PatDOB"]');
        this.Gender=page.locator('.content input[value="M"]');
        this.PatientSubmission =page.locator('[name="Submit"]');
    }

    async PatientInformation(MedicalID:string,PatientLastName:string,PatientFirstName:string,PatientDOB:string,){
    
        await this.MedicalID.fill(MedicalID);
        await this.PatientLastName.fill(PatientLastName);
        await this.PatientFirstName.fill(PatientFirstName);
        await this.PatientDOB.fill(PatientDOB);
        await this.Gender.check();
        await expect(this.Gender).toBeChecked();
        await this.PatientSubmission.click();
        
    }
}

export{PatientInformationPage}