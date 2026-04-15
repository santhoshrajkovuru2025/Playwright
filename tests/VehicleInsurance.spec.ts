
import { test, expect } from '@playwright/test';
import { TricentisPageObject } from '../TricentisPages/TricentisPageObject';

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
        await vehicle.getVehicleDetails();

        // Enter Insurance Data:
        await Insurance.getInsurance();

        // Enter Product Data Price Option:
        await Product.getProductData();
        await page.keyboard.press('Tab');
        await Product.getselectPriceOption();
    

        // Send Quote:
        await Quotation.getsendQuotation();



    });


});