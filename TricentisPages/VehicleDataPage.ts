
import {Page, Locator} from '@playwright/test'

class VehicleDataPage{

    page:Page;
    make:Locator;
    enginePerformance?:Locator;
    manufactureDate:Locator;
    numOfSeats:Locator;
    fuel:Locator;
    payload?:Locator;
    model?:Locator;
    CC?:Locator;
    totalWeight?:Locator;
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
        this.payload = page.locator('#payload');
        this.totalWeight = page.locator('#totalweight');
        this.model = page.locator('#model');
        this.CC = page.locator('#cylindercapacity');
        this.listPrice = page.locator('#listprice');
        this.licenseNumber = page.locator('#licenseplatenumber');
        this.annualMilleage = page.locator('#annualmileage');
        this.nextInsuranceButton= page.locator('#nextenterinsurantdata');

    }
   async getVehicleDetails( data:{
    engineperformance?:any,
    listPrice?:any,
    licenseNumber?:any,
    annualMilleage?:any,
    payload?:any,
    totalWeight?:any, 
    CC?:any,
    model?:any
    })
    {

        // To select option for 'Make' in Vehicle Data:
        await this.make.selectOption('Mercedes Benz');
        if(data.engineperformance && this.enginePerformance&& await this.enginePerformance.isVisible()){
        // Enter the Engine Performance Data in Vehicle Data.
        await this.enginePerformance.fill(data.engineperformance);
        }
        // Enter the Date of Manufacturer at Vehicle Data.
        await this.manufactureDate.fill('04/01/2025');
        // Select the option at Number of Seats at Vehicle Data.
        await this.numOfSeats.selectOption('7');
        // Select the option Fuel Type at Vehicle Data.
        await this.fuel.selectOption('Electric Power');
        if(data.payload && this.payload && await this.payload.isVisible()){
        // To enter the Payload -- {truck}
        await this.payload.fill(data.payload);
       }
       if (data.totalWeight && this.totalWeight && await this.totalWeight.isVisible()){
        // To enter the Total weight  -- {truck}
        await this.totalWeight.fill(data.totalWeight);
        }
        if(data.model && this.model && await this.model.isVisible()){
        // Enter the Model in Vehicle Data. -- {motor cycle}
        await this.model.selectOption(data.model);
        }
        if(data.CC && this.CC && await this.CC.isVisible()){
        // Enter the Cylinder Capacity [ccm] at Vehicle Data. -- {motorcycle}
        await this.CC.fill(data.CC); 
        }
        if(data.listPrice && this.listPrice && await this.listPrice.isVisible()){
        // Enter the data in the List Price [$] at Vehicle Data.
        await this.listPrice.fill(data.listPrice);
        }
        if(data.licenseNumber && this.licenseNumber && await this.licenseNumber.isVisible()){
        // Enter the data in the License Plate Number at Vehicle Data.
        await this.licenseNumber.fill(data.licenseNumber);
        }
        if(data.annualMilleage && this.annualMilleage && await this.annualMilleage.isVisible()){
        // Enter the data in the Annual Mileage [mi] at Vehicle Data.
        await this.annualMilleage.fill(data.annualMilleage);
        }
        // Click on the 'Next' button.
        await this.nextInsuranceButton.click();

    }
}

export {VehicleDataPage}