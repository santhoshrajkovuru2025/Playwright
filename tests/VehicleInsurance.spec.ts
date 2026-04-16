
import { test } from '@playwright/test';
import { TricentisPageObject } from '../TricentisPages/TricentisPageObject';
import InsuranceDetails from '../TricentisTestdata/InsuranceDetails.json';
import sendQuotation from '../TricentisTestdata/sendQuotation.json';
import vehicleDetails from '../TricentisTestdata/vehicleDetails.json';

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


});