
import {Page} from '@playwright/test';
import { TricentisLoginPage } from './TricentisLoginPage';
import { VehicleDataPage } from './VehicleDataPage';
import { InsurancePage } from './InsurancePage';
import { ProductDataPage } from './ProductDataPage';
import { sendQuotationPage } from './SendQuotationPage';

class TricentisPageObject {

    page: Page;
    tricentisLoginPage: TricentisLoginPage;
    vehicleDataPage:VehicleDataPage;
    InsurancePage:InsurancePage;
    ProductDataPage:ProductDataPage;
    sendQuotationPage:sendQuotationPage;


    constructor(page:Page){

        this.page = page;
        this.tricentisLoginPage = new TricentisLoginPage(this.page);
        this.vehicleDataPage = new VehicleDataPage(this.page);
        this.InsurancePage = new InsurancePage(this.page);
        this.ProductDataPage = new ProductDataPage(this.page);
        this.sendQuotationPage = new sendQuotationPage(this.page)


    }
    getTricentisLogin(){
        return this.tricentisLoginPage;
    }
    getvehicleDataPage(){
        return this.vehicleDataPage;
    }
    getInsurancePage(){
        return this.InsurancePage;
    }
    getProductDataPage(){
        return this.ProductDataPage;
    }
    getsendQuotationPage(){
        return this.sendQuotationPage;
    }
}

export {TricentisPageObject}