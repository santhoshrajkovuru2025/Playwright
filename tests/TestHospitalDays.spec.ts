import { test } from '@playwright/test';
import {eTARPageManager}  from '../eTARPages/eTARPageManager';
import LoginCredentials from '../eTARTestData/LoginCredentials.json';
import ProviderInformation from '../eTARTestData/ProviderInformation.json';
import PatientInformation from '../eTARTestData/PatientInformation.json';
import ServiceInformation  from '../eTARTestData/ServiceInformation.json';

    test('Creating a TAR from eTAR Application', async({page})=>{
        
        const ETARPageManager = new eTARPageManager(page);
        const loginProviderPage = ETARPageManager.getloginProviderPage();
        const providerInformationPage = ETARPageManager.getProviderInformationPage();
        const patientInformationPage = ETARPageManager.getPatientInformationPage();
        const serviceInformationPage = ETARPageManager.getServiceInformationPage();
        const TARsubmissionpage = ETARPageManager.getTARSubmissionPage();
        const TARInquirypage = ETARPageManager.getTARInquiryPage();

        // Login Page 
        await loginProviderPage.LoginTo();
        await loginProviderPage.LoginDetails(LoginCredentials.ProviderID,LoginCredentials.OwnerNum,LoginCredentials.userEmail);

        // Enter the Provider Information page
        await providerInformationPage.ProviderInformation(ProviderInformation.contactName,ProviderInformation.TARCompleted,ProviderInformation.PhoneAreaCode,ProviderInformation.PhoneAreaPrefix,ProviderInformation.PhoneAreaSuffix,ProviderInformation.PhoneExtension)

        // Patient Information
        await patientInformationPage.PatientInformation(PatientInformation.MedicalID,PatientInformation.PatientLastname,PatientInformation.PatientFirstName,PatientInformation.PatientDOB)

        // Service page:
        await serviceInformationPage.ServiceInformation(ServiceInformation.ServiceCode,ServiceInformation.FromDate,ServiceInformation.ThroughDate,ServiceInformation.AdmitDate,ServiceInformation.DischargeDate,ServiceInformation.ICD10Code,ServiceInformation.DateofOnset)

        // Submit TAR from the services page.
        await TARsubmissionpage.TARSubmission();
        const TCN:any = await TARsubmissionpage.getTARNumber();
        console.log('TCN: '+TCN);

        // TAR Inquiry Page:
        await TARInquirypage.TARInquiry(TCN);
        
    });
