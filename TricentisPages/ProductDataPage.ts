import {Page,Locator} from '@playwright/test';

class ProductDataPage {

    page:Page;
    startDate:Locator;
    insurance:Locator;
    meritRating:Locator;
    damageInsurance:Locator;
    optionalProducts:Locator;
    courtesyCar: Locator;
    selectPriceOption:Locator;

    // select price Option:
    
    selectUltimiateRadioButton: Locator;
    sendQuotation: Locator;
   

    constructor(page:Page){

        this.page = page;
        this.startDate = page.locator('#startdate');
        this.insurance= page.locator('#insurancesum');
        this.meritRating = page.locator('#meritrating');
        this.damageInsurance = page.locator('#damageinsurance');
        this.optionalProducts = page.locator('#LegalDefenseInsurance');
        this.courtesyCar = page.locator('#courtesycar');
        this.selectPriceOption = page.locator('#nextselectpriceoption');

        //select price Option:
        this.selectUltimiateRadioButton=  page.locator('#selectultimate');
        this.sendQuotation = page.locator('#nextsendquote');

    }

    async getProductData(){

        // To enter the Start date of the Product
        await this.startDate.fill('06/15/2026');
        await this.page.keyboard.press('Tab');
        // To select the Insurance Sum amount in the product.
        await this.insurance.selectOption('25000000');
        // To select the Merit Rating of the product data
        await this.meritRating.selectOption('Bonus 5');
        // To select the Damage Insurance of the Product
        await this.damageInsurance.selectOption('Partial Coverage');
        // To select the Optional Products in the product Data.
        await this.optionalProducts.check({force:true});
        // To select the Courtesy Car in the Product Data
        await this.courtesyCar.selectOption('Yes');
        // To navigate the select the price option.
        await this.selectPriceOption.click();
        
    }

    async getselectPriceOption(){

        // to select the radio button of the Ultimate 
        await this.selectUltimiateRadioButton.check({force:true});
        // To click on the send quote.
        await this.sendQuotation.click();
        
    }
}

export {ProductDataPage}