
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Testing Tricentis Vehicle Insurance Application', () => {



    test('To enter the Truck Details', async({page})=>{

        await page.goto('https://sampleapp.tricentis.com/101/index.php');
        

        // To select the 'Truck' option;
        await page.locator('#nav_truck').first().click();
        await page.waitForLoadState();
        // To select the make
        await page.locator('#make').selectOption('Honda');
        // To enter the Engine Performance
        await page.locator('#engineperformance').fill('1451');
        // To enter the Date of Manufacturer
        await page.locator('#dateofmanufacture').fill('01/01/2026');
        // To select the number of seats
        await page.locator('#numberofseats').selectOption('8');
        // To select the fuel type.
        await page.locator('#fuel').selectOption('Gas');
        // To enter the Payload
        await page.locator('#payload').fill('700');
        // To enter the weight 
        await page.locator('#totalweight').fill('140');
        // To enter the List Price.
        await page.locator('#listprice').fill('1555');
        // To enter the License Plate Number
        await page.locator('#licenseplatenumber').fill('BH154HH52')
        // To enter the Annaul Milleage
        await page.locator('#annualmileage').fill('15266');
        // to the click on the Nexr button
        await page.locator('#nextenterinsurantdata').click();

        // Enter the Insurant Details:

        // To enter the FirstName of the Insurant Details
        await page.locator('#firstname').fill('Naminkee');
        // To enter the Lastname of the Insurant Details
        await page.locator('#lastname').fill('Samyukth');
        // To enter the Birth Date of the Insurant Details:
        await page.locator('#birthdate').fill('11/10/1962');
        // To select the gender of the Insurant Details:
        await page.locator('#gendermale').first().check({force:true});
        // To select the Street Address
        await page.locator('#streetaddress').fill('HNo;168/14, The Wallmart');
        // To select the Country
        await page.locator('#country').selectOption('Antarctica');
        // To enter in the Zip Code
        await page.locator('#zipcode').fill('999077');
        // To enter the city
        await page.locator('#city').fill('Hong Kong');
        // To select the Occupation
        await page.locator('#occupation').selectOption('Unemployed');
        // to select the Hobbies:
        await page.locator('#skydiving').check({force:true});
        // enter the webiste details
        await page.locator('#website').fill('https://sampleapp.tricentis.com/101/app.php');
        // select the image

        const filepath = path.resolve(__dirname,'../TestData/BMW Image.jpg');
        await page.locator('[type="file"]').setInputFiles(filepath);
        // to Navigate to the product data 
        await page.locator('#nextenterproductdata').click();

        // Enter product Data:

        await page.locator('#startdate').fill('10/10/2026');
        // Press TAB to move to next field
        await page.keyboard.press('Tab');
        await page.locator('#insurancesum').selectOption('3000000');
        await page.locator('#damageinsurance').selectOption('Partial Coverage');
        await page.locator('#EuroProtection').check({force: true});
        // To navigate the select the price option.
        await page.locator('#nextselectpriceoption').click();

        // Select Price Option:
        // to select the radio button of the Ultimate 
        await page.locator('#selectultimate').check({force:true});
    
        // To click on the send quote.
        await page.locator('#nextsendquote').click();

        // Send Quote:
        // To enter the Email at the Send Quote section.
        await page.locator('#email').fill('swaroopreddy.y@softsol.com')
        // To enter the Phone number at the Send Quote section.
        await page.locator('#phone').fill('9814512121');
        //  To enter the username at the Send Quote section.
        await page.locator('#username').fill('swaroop19');
        // To enter the password at the Send Quote section.
        await page.locator('#password').fill('Swaroop@123!');
        // To enter the Confrm password at the Send Quote section.
        await page.locator('#confirmpassword').fill('Swaroop@123!');
        // To enter the comments at the Send Quote section.
        await page.locator('#Comments').fill('The above Insurance Details are verified for Truck. Further Processing details will be shared soon');
        // to click on the send button at the Send Quote section.
        await page.locator('#sendemail').click();
        await page.waitForLoadState();
        // To click on the 'OK' button at the Send Quote section.
        console.log(await page.locator('.showSweetAlert').textContent());
        await expect(page.locator('.showSweetAlert')).toBeVisible();
        await page.locator('.confirm').click();

    });

    test('To Enter data in the Motorcycle', async({page})=>{

        await page.goto('https://sampleapp.tricentis.com/101/index.php');

        // To navigate to the Motorcycle

        await page.locator('#nav_motorcycle').first().click();
        await page.waitForLoadState();
        // Enter the vehicle Data:
        // To select the option for Make drop down
        await page.locator('#make').selectOption('Porsche');
        // Enter the Model in Vehicle Data.
        await page.locator('#model').selectOption('Three-Wheeler');
        // Enter the Cylinder Capacity [ccm] at Vehicle Data.
        await page.locator('#cylindercapacity').fill('1450');
        // Enter the Engine Performance at Vehicle Data.
        await page.locator('#engineperformance').fill('1600');
        // Select the date of manufacturer at Vehicle Data.
        await page.locator('#dateofmanufacture').fill('01/01/2026');
        // select the number of seats at Vehicle Data.
        await page.locator('#numberofseatsmotorcycle').selectOption('3');
        // Enter the data in the list price at Vehicle Data.
        await page.locator('#listprice').fill('1520');
        // Enter the data in the Annual Mileage [mi] at Vehicle Data.
        await page.locator('#annualmileage').fill('50000');
        // Click on the 'Next' button.
        await page.locator('#nextenterinsurantdata').click();


        // Enter Insurant Data:
        // Enter the First Name in Insurant Data.
        await page.locator('#firstname').fill('Robert');
        // Enter the Last Name in Insurant Data.
        await page.locator('#lastname').fill('Steve');
        // Enter the Date of Birth in Insurant Data.
        await page.locator('#birthdate').fill('10/12/1989');
        await page.keyboard.press('Tab');
        // To select Gender in Insurant Data.
        await expect(page.locator('#gendermale')).toBeVisible();
        await page.locator('#gendermale').first().check({ force: true });
        // to Enter the Street Address in Insurant Data
        await page.locator('#streetaddress').fill('H.No:125/14/I/10, Stewart Street');
        // Select the Country of the Insurant
        await page.locator('#country').selectOption('United States');
        // Enter the Zip Code of the Insurant
        await page.locator('#zipcode').fill('10004');
        // Enter the City of the Insurant
        await page.locator('#city').fill('new York');
        // Enter the Occupation of the Insurant.
        await page.locator('#occupation').selectOption('Selfemployed');
        // Select the Hobby of the Insurant
        await page.locator('#cliffdiving').check({ force: true });
        // Enter the Website (if any ) of the Insurant
        await page.locator('#website').fill('https://sampleapp.tricentis.com/101/app.php');
        await page.keyboard.press('Tab');
        // To Upload the picture of the Insurant
        const filePath = path.resolve(__dirname, '../TestData/BMW Image.jpg');
        await page.locator('input[type="file"]').setInputFiles(filePath);

        // to submit the page
        await page.locator('#nextenterproductdata').click();

         // Enter Product Data;
        // To enter the Start date of the Product
        await page.locator('#startdate').fill('10/15/2026');
        await page.keyboard.press('Tab');
        // To select the Insurance Sum amount in the product.
        await page.locator('#insurancesum').selectOption('7000000');
        // To select the Damage Insurance of the Product
        await page.locator('#damageinsurance').selectOption('No Coverage');
        // To select the Optional Products in the product Data.
        await page.locator('#EuroProtection').check({force:true});
        // To navigate the select the price option.
        await page.locator('#nextselectpriceoption').click();

        // Select Price Option:
        // to select the radio button of the Ultimate 
        await page.locator('#selectgold').check({force:true});
        // To click on the send quote.
        await page.locator('#nextsendquote').click();

        // Send Quote:
        // To enter the Email at the Send Quote section.
        await page.locator('#email').fill('swaroopreddy.y@softsol.com')
        // To enter the Phone number at the Send Quote section.
        await page.locator('#phone').fill('9814512121');
        //  To enter the username at the Send Quote section.
        await page.locator('#username').fill('swaroop19');
        // To enter the password at the Send Quote section.
        await page.locator('#password').fill('Swaroop@123!');
        // To enter the Confrm password at the Send Quote section.
        await page.locator('#confirmpassword').fill('Swaroop@123!');
        // To enter the comments at the Send Quote section.
        await page.locator('#Comments').fill('The above Insurance Details are verified for Motor Cycle. Further Processing details will be shared soon');
        // to click on the send button at the Send Quote section.
        await page.locator('#sendemail').click();
        await page.waitForLoadState();
        // To click on the 'OK' button at the Send Quote section.
        console.log(await page.locator('.showSweetAlert').textContent());
        await expect(page.locator('.showSweetAlert')).toBeVisible();
        await page.locator('.confirm').click();
    
    });

    test('To Enter the Camper Details', async({page})=>{

        await page.goto('https://sampleapp.tricentis.com/101/index.php');
        // to select the Camper
        await page.locator('#nav_camper').first().click();
        await page.waitForLoadState();

        // To select option for 'Make' in Vehicle Data:
        await page.locator('#make').selectOption('Volkswagen');
        // Enter the Engine Performance Data in Vehicle Data.
        await page.locator('#engineperformance').fill('1800');
        // Enter the Date of Manufacturer at Vehicle Data.
        await page.locator('#dateofmanufacture').fill('11/11/2025');
        // Select the option at Number of Seats at Vehicle Data.
        await page.locator('#numberofseats').selectOption('4');
        // select the Right Drive option
        await page.locator('#righthanddriveyes').check({force:true})
        // Select the option Fuel Type at Vehicle Data.
        await page.locator('#fuel').selectOption('Diesel');
        // To enter the weight of  Payload [Kg]
        await page.locator('#payload').fill('900');
        // To enter the Total weight[kg] 
        await page.locator('#totalweight').fill('15858');
        // to enter the List price {$}
        await page.locator('#listprice').fill('14847');
        // to enter the license plate number;
        await page.locator('#licenseplatenumber').fill('MH04JK124');
        //To enter the Annual Milleage
        await page.locator('#annualmileage').fill('1562');
        // To submit the details of Vehicle
        await page.locator('#nextenterinsurantdata').click();

        // Enter Insurant Data:
        // Enter the First Name in Insurant Data.
        await page.locator('#firstname').fill('Richard');
        // Enter the Last Name in Insurant Data.
        await page.locator('#lastname').fill('Paul');
        // Enter the Date of Birth in Insurant Data.
        await page.locator('#birthdate').fill('10/12/1986');
        await page.keyboard.press('Tab');
        // To select Gender in Insurant Data.
        await expect(page.locator('#gendermale')).toBeVisible();
        await page.locator('#gendermale').first().check({ force: true });
        // to Enter the Street Address in Insurant Data
        await page.locator('#streetaddress').fill('H.No:125/14/I/10, Stewart Street');
        // Select the Country of the Insurant
        await page.locator('#country').selectOption('United States');
        // Enter the Zip Code of the Insurant
        await page.locator('#zipcode').fill('10004');
        // Enter the City of the Insurant
        await page.locator('#city').fill('New York');
        // Enter the Occupation of the Insurant.
        await page.locator('#occupation').selectOption('Public Official');
        // Select the Hobby of the Insurant
        await page.locator('#speeding').check({ force: true });
        // Enter the Website (if any ) of the Insurant
        await page.locator('#website').fill('https://sampleapp.tricentis.com/101/app.php');
        await page.keyboard.press('Tab');
        // To Upload the picture of the Insurant
        const filePath = path.resolve(__dirname, '../TestData/BMW Image.jpg');
        await page.locator('input[type="file"]').setInputFiles(filePath)

        // Optional: verify file name appears in UI
        await expect(page.locator('input[type="file"]')).toHaveValue(/BMW Image.jpg/);

        // to Navigate to the product data 
        await page.locator('#nextenterproductdata').click();

        // Enter Product Data;
        // To enter the Start date of the Product
        await page.locator('#startdate').fill('10/15/2026');
        await page.keyboard.press('Tab');
        // To select the Insurance Sum amount in the product.
        await page.locator('#insurancesum').selectOption('25000000');
         // To select the Damage Insurance of the Product
        await page.locator('#damageinsurance').selectOption('Partial Coverage');
        // To select the Optional Products in the product Data.
        await page.locator('#LegalDefenseInsurance').check({force:true});
        // To navigate the select the price option.
        await page.locator('#nextselectpriceoption').click();


        // select the Prie Option
        await page.locator('#selectsilver').check({force:true});

        // To click on the send quote.
        await page.locator('#nextsendquote').click();

        // Send Quote:
        // To enter the Email at the Send Quote section.
        await page.locator('#email').fill('swaroopreddy.y@softsol.com')
        // To enter the Phone number at the Send Quote section.
        await page.locator('#phone').fill('9814512121');
        //  To enter the username at the Send Quote section.
        await page.locator('#username').fill('swaroop19');
        // To enter the password at the Send Quote section.
        await page.locator('#password').fill('Swaroop@123!');
        // To enter the Confrm password at the Send Quote section.
        await page.locator('#confirmpassword').fill('Swaroop@123!');
        // To enter the comments at the Send Quote section.
        await page.locator('#Comments').fill('The above Insurance Details are verified for Camper. Further Processing details will be shared soon');
        // to click on the send button at the Send Quote section.
        await page.locator('#sendemail').click();
        await page.waitForLoadState();
        // To click on the 'OK' button at the Send Quote section.
        console.log(await page.locator('.showSweetAlert').textContent());
        await expect(page.locator('.showSweetAlert')).toBeVisible();
        await page.locator('.confirm').click();

    });

});