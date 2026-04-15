
import {Page, Locator,expect} from '@playwright/test';
import path from 'path';

class InsurancePage {

    page:Page;
    firstName:Locator;
    lastName:Locator;
    birthDay:Locator;
    gender:Locator;
    streetAddress:Locator;
    country:Locator;
    ZipCode:Locator;
    city:Locator;
    occupation: Locator;
    hobbies: Locator;
    website: Locator;
    picture: Locator;
    nextProductDataButton: Locator;
    


    constructor(page:Page){

        this.page = page;
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lastname');
        this.birthDay = page.locator('#birthdate');
        this.gender = page.locator('#gendermale');
        this.streetAddress = page.locator('#streetaddress');
        this.country = page.locator('#country');
        this.ZipCode = page.locator('#zipcode');
        this.city = page.locator('#city');
        this.occupation = page.locator('#occupation');
        this.hobbies = page.locator('#speeding');
        this.website = page.locator('#website');
        this.picture = page.locator('input[type="file"]');
        this.nextProductDataButton = page.locator('#nextenterproductdata');

    }
    
   async getInsurance(firstName:string,lastName:string,streetAddress:string,ZipCode:string,city:string,website:string){

    // Enter the First Name in Insurance Data.
            await this.firstName.fill(firstName);
            // Enter the Last Name in Insurant Data.
            await this.lastName.fill(lastName);
            // Enter the Date of Birth in Insurant Data.
            await this.birthDay.fill('10/12/1989');
            await this.page.keyboard.press('Tab');
            // To select Gender in Insurant Data.
            await expect(this.page.locator('#gendermale')).toBeVisible();
            await this.gender.first().check({ force: true });
            // to Enter the Street Address in Insurant Data
            await this.streetAddress.fill(streetAddress);
            // Select the Country of the Insurant
            await this.country.selectOption('United States');
            // Enter the Zip Code of the Insurant
            await this.ZipCode.fill(ZipCode);
            // Enter the City of the Insurant
            await this.city.fill(city);
            // Enter the Occupation of the Insurant.
            await this.occupation.selectOption('Public Official');
            // Select the Hobby of the Insurance
            await this.hobbies.check({ force: true });
            // Enter the Website (if any ) of the Insurance
            await this.website.fill(website);
            await this.page.keyboard.press('Tab');
            // To Upload the picture of the Insurance
            const filePath:any = path.resolve(__dirname, '../TestData/BMW Image.jpg');
            await this.picture.setInputFiles(filePath);
    
            // Optional: verify file name appears in UI
            await expect(this.picture).toHaveValue(/BMW Image.jpg/);
    
            // to Navigate to the product data 
            await this.nextProductDataButton.click();
    
    }
}

export {InsurancePage}