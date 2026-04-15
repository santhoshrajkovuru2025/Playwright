import { Page } from '@playwright/test'
import { ProviderLoginPage } from './ProviderLoginPage'
import { ProviderInformationPage } from './ProviderInformationPage';
import { PatientInformationPage } from './PatientInformationPage';
import { ServiceInformationPage } from './ServiceInformationPage';
import { TARSubmissionPage } from './TARSubmissionPage';
import { TARInquiryPage } from './TARInquiryPage';

class eTARPageManager {

    page: Page;
    ProviderLoginPage: ProviderLoginPage;
    ProviderInformationPage:ProviderInformationPage;
    PatientInformationPage:PatientInformationPage;
    ServiceInformationPage:ServiceInformationPage;
    TARSubmissionPage:TARSubmissionPage;
    TARInquiryPage:TARInquiryPage;

    constructor(page:Page) {

        this.page = page;
        this.ProviderLoginPage = new ProviderLoginPage(this.page);
        this.ProviderInformationPage = new ProviderInformationPage(this.page);
        this.PatientInformationPage = new PatientInformationPage(this.page);
        this.ServiceInformationPage = new ServiceInformationPage(this.page);
        this.TARSubmissionPage = new TARSubmissionPage(this.page);
        this.TARInquiryPage = new TARInquiryPage(this.page);
    }

    getloginProviderPage() {

        return this.ProviderLoginPage;
    }
    getProviderInformationPage() {

        return this.ProviderInformationPage;
    }
    getPatientInformationPage() {

        return this.PatientInformationPage;
    }
    getServiceInformationPage() {

        return this.ServiceInformationPage;
    }
    getTARSubmissionPage() {

        return this.TARSubmissionPage;
    }
    getTARInquiryPage() {
        
        return this.TARInquiryPage;
    }


}

export { eTARPageManager }