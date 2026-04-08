
import { test,expect } from '@playwright/test';

    test('Login to the Application', async({page})=>{
        
        await page.goto('https://silsr.softsol.com:6118/ProviderPortalSimulator?handler=login');
        await page.locator('#pname').pressSequentially('1548201965');
        await page.locator('#oname').fill('01');
        await page.locator('#emailId').fill('santhoshraj.kovuru@softsol.com');
        await page.selectOption('#Environment', 'DEV');
        await page.locator('#txt_ShowUrl').click();
        await page.locator('#LinkMedicalServices').click();
        console.log(await page.title());

        // Provider Information

        // Selection of Provider Address

        await page.locator('[href*="Provider_Addrs_Sel.htm&CurrentPage=no_save&Upload=FALSE&CancelService=FALSE"]').click();
        await page.locator('[href*="Provider_Addrs_Sel&Location=001&ProviderNumber=1548201965&Owner=01"]').click();

        // Enter the Provider Information page

        await page.locator('input[name="txtTARCompBy"]').fill('01984');
        await page.locator('input[name="Submit"]').click();


        // Patient Information

        await page.locator('input[name="MedicalID"]').fill('14871987S');
        await page.locator('input[name="PatLstNme"]').fill('Barns');
        await page.locator('input[name="PatFrstNme"]').fill('Jim');
        await page.locator('input[name="PatDOB"]').fill('12221966');
        await page.locator('.content input[value="M"]').check();
        await expect(page.locator('.content input[value="M"]')).toBeChecked();
        await page.locator('[name="Submit"]').click();

        // Service page:

        await page.locator('text = Hospital Days').click();
        await page.locator("input[name='ServiceCode']").fill('2');
        await page.locator("[name='TotUnitsReq']").fill('1');
        // enter the from Date:
        await page.locator("input[name='FromDate']").fill('');
        await page.locator("input[name='FromDate']").fill('04072026');
        // enter the Through Date:
        await page.locator("input[name='ThruDate']").fill('');
        await page.locator("input[name='ThruDate']").fill('04072026');
        // enter the Admit Date:
        await page.locator("input[name='AdmitDate']").fill('');
        await page.locator("input[name='AdmitDate']").fill('04072026');
        // enter the Discharge Date:
        await page.locator("input[name='DischDate']").fill('');
        await page.locator("input[name='DischDate']").fill('04072026');
        // Drop-down for ICD - code 10
        await page.selectOption("[name='Serv_ICDCodeType']",'ICD-10');
        await page.locator("[name='Serv_ICD9_1']").fill('A52.9');
        // date of Onset:
        await page.locator("input[name='Serv_DateOnset_1']").fill('');
        await page.locator("input[name='Serv_DateOnset_1']").fill('04072026'); 


        // Clicking on Submit button at Service page
        await page.locator("input[name='Submit']").click();
        await page.locator("[href='surgewebservice?serviceName=surgewebservice&templateName=SetAttachmentsInd.htm&CurrentPage=Serv_Sel']").click();
        await page.locator("[value='2']").check();
        await expect(page.locator("[value='2']")).toBeChecked();
        await page.locator('#submit1').click();

        // TAR Creation Page.
        console.log(await page.locator('p:has-text("TAR #") b').textContent());
        
    });
