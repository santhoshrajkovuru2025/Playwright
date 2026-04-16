
import { test } from '@playwright/test';
import { TricentisPageObject } from '../TricentisPages/TricentisPageObject';
import vehicleDetails from '../TricentisTestdata/vehicleDetails.json';
import sendQuotation from '../TricentisTestdata/sendQuotation.json';
import InsuranceDetails from '../TricentisTestdata/InsuranceDetails.json';


test.describe('Testing Tricentis Vehicle Insurance Application', () => {

    test('To enter the Automobile Details', async ({ page }) => {

        const tricentisPageObject = new TricentisPageObject(page);
        const login = tricentisPageObject.getTricentisLogin();
        const vehicle = tricentisPageObject.getvehicleDataPage();
        const Insurance = tricentisPageObject.getInsurancePage();
        const Product = tricentisPageObject.getProductDataPage();
        const Quotation = tricentisPageObject.getsendQuotationPage();


        // To click on 'Automobile' option:
        await login.getLaunchURL();
        await login.selectVehicle();

        // Enter Vehicle Data:
        await vehicle.getVehicleDetails({
            engineperformance:vehicleDetails.engineperformance,
            listPrice:vehicleDetails.listPrice,
            licenseNumber:vehicleDetails.licenseNumber,
            annualMilleage:vehicleDetails.annualMilleage
        });

        // Enter Insurance Data:
        await Insurance.getInsurance(InsuranceDetails.firstName,InsuranceDetails.lastName,InsuranceDetails.streetAddress,InsuranceDetails.ZipCode,InsuranceDetails.city,InsuranceDetails.website);

        // Enter Product Data Price Option:
        await Product.getProductData();
        await page.keyboard.press('Tab');
        await Product.getselectPriceOption();
    

        // Send Quote:
        await Quotation.getsendQuotation(sendQuotation.email,sendQuotation.phone,sendQuotation.userName,sendQuotation.password,sendQuotation.Comments);



    });

    test('To Enter the Truck Details', async({page})=>{
 
        const tricentisPageObject = new TricentisPageObject(page);
        const login = tricentisPageObject.getTricentisLogin();
        const vehicle = tricentisPageObject.getvehicleDataPage();
        const Insurance = tricentisPageObject.getInsurancePage();
        const Product = tricentisPageObject.getProductDataPage();
        const Quotation = tricentisPageObject.getsendQuotationPage();
 
        await login.getLaunchURL();
        await login.selectVehicle();

        // Vehicle Details:

        await vehicle.getVehicleDetails({
            engineperformance:vehicleDetails.engineperformance,
            payload:vehicleDetails.payload,
            totalWeight:vehicleDetails.totalWeight,
            listPrice:vehicleDetails.listPrice,
            licenseNumber:vehicleDetails.licenseNumber,
            annualMilleage:vehicleDetails.annualMilleage
        });

        // Insurance Tab:

        await Insurance.getInsurance(InsuranceDetails.firstName,InsuranceDetails.lastName,InsuranceDetails.streetAddress,InsuranceDetails.ZipCode,InsuranceDetails.city,InsuranceDetails.website);

        // Enter product Data and Select Price Option:

        await Product.getProductData();
        await page.keyboard.press('Tab');
        await Product.getselectPriceOption();

        // Send Quote:

        await Quotation.getsendQuotation(sendQuotation.email,sendQuotation.phone,sendQuotation.userName,sendQuotation.password,sendQuotation.Comments);

    });

    test('To Enter the Motorcycle Details', async({page})=>{

        const tricentisPageObject = new TricentisPageObject(page);
        const login = tricentisPageObject.getTricentisLogin();
        const vehicle = tricentisPageObject.getvehicleDataPage();
        const Insurance = tricentisPageObject.getInsurancePage();
        const Product = tricentisPageObject.getProductDataPage();
        const Quotation = tricentisPageObject.getsendQuotationPage();

        await login.getLaunchURL();
        await login.selectVehicle();

        // vehicle Details:

        await vehicle.getVehicleDetails({
            CC:vehicleDetails.CC,
            engineperformance:vehicleDetails.engineperformance,
            listPrice:vehicleDetails.listPrice,
            annualMilleage:vehicleDetails.annualMilleage
        });

        //  Insurance Tab:

        await Insurance.getInsurance(InsuranceDetails.firstName,InsuranceDetails.lastName,InsuranceDetails.streetAddress,InsuranceDetails.ZipCode,InsuranceDetails.city,InsuranceDetails.website);

        // Enter product Data and Select Price Option:

        await Product.getProductData();
        await page.keyboard.press('Tab');
        await Product.getselectPriceOption();

        // Send Quote:

        await Quotation.getsendQuotation(sendQuotation.email,sendQuotation.phone,sendQuotation.userName,sendQuotation.password,sendQuotation.Comments);

    
    });

    test('To Enter the Camper Details', async({page})=>{

        const tricentisPageObject = new TricentisPageObject(page);
        const login = tricentisPageObject.getTricentisLogin();
        const vehicle = tricentisPageObject.getvehicleDataPage();
        const Insurance = tricentisPageObject.getInsurancePage();
        const Product = tricentisPageObject.getProductDataPage();
        const Quotation = tricentisPageObject.getsendQuotationPage();

        await login.getLaunchURL();
        await login.selectVehicle();

        // vehicle Details:

        await vehicle.getVehicleDetails({
            engineperformance:vehicleDetails.engineperformance,
            payload:vehicleDetails.payload,
            totalWeight:vehicleDetails.totalWeight,
            listPrice:vehicleDetails.listPrice,
            licenseNumber:vehicleDetails.licenseNumber,
            annualMilleage:vehicleDetails.annualMilleage
        });

        //  Insurance Tab:

        await Insurance.getInsurance(InsuranceDetails.firstName,InsuranceDetails.lastName,InsuranceDetails.streetAddress,InsuranceDetails.ZipCode,InsuranceDetails.city,InsuranceDetails.website);

        // Enter product Data and Select Price Option:

        await Product.getProductData();
        await page.keyboard.press('Tab');
        await Product.getselectPriceOption();

        // Send Quote:

        await Quotation.getsendQuotation(sendQuotation.email,sendQuotation.phone,sendQuotation.userName,sendQuotation.password,sendQuotation.Comments);

    

    });

});