
import {Page, Locator} from '@playwright/test'

class VehicleDataPage{

    page:Page;
    make:Locator;
    enginePerformance:Locator;
    manufactureDate:Locator;
    numOfSeats:Locator;
    fuel:Locator;
    listPrice:Locator;
    licenseNumber:Locator;
    annualMilleage: Locator;
    nextInsuranceButton:Locator;

    constructor(page:Page){

        this.page=page;
        this.make = page.locator('#make');
        this.enginePerformance = page.locator('#engineperformance');
        this.manufactureDate = page.locator('#dateofmanufacture');
        this.numOfSeats=page.locator('#numberofseats');
        this.fuel = page.locator('#fuel');
        this.listPrice = page.locator('#listprice');
        this.licenseNumber = page.locator('#licenseplatenumber');
        this.annualMilleage = page.locator('#annualmileage');
        this.nextInsuranceButton= page.locator('#nextenterinsurantdata');

    }
   async getVehicleDetails(engineperformance:string,listPrice:string,licenseNumber:string,annualMilleage:string){

        // To select option for 'Make' in Vehicle Data:
        await this.make.selectOption('Mercedes Benz');
        // Enter the Engine Performance Data in Vehicle Data.
        await this.enginePerformance.fill(engineperformance);
        // Enter the Date of Manufacturer at Vehicle Data.
        await this.manufactureDate.fill('04/01/2025');
        // Select the option at Number of Seats at Vehicle Data.
        await this.numOfSeats.selectOption('7');
        // Select the option Fuel Type at Vehicle Data.
        await this.fuel.selectOption('Electric Power');
        // Enter the data in the List Price [$] at Vehicle Data.
        await this.listPrice.fill(listPrice);
        // Enter the data in the License Plate Number at Vehicle Data.
        await this.licenseNumber.fill(licenseNumber);
        // Enter the data in the Annual Mileage [mi] at Vehicle Data.
        await this.annualMilleage.fill(annualMilleage);
        // Click on the 'Next' button.
        await this.nextInsuranceButton.click();

    }
}

export {VehicleDataPage}