import { test,expect } from '@playwright/test';
import { eTARPageManager } from '../eTARPages/eTARPageManager';
import LoginCredentials from '../eTARTestData/LoginCredentials.json';
import ProviderInformation from '../eTARTestData/ProviderInformation.json';
import PatientInformation from '../eTARTestData/PatientInformation.json';
import ServiceInformation  from '../eTARTestData/ServiceInformation.json';

const loginDetails = LoginCredentials;
const providerDetails = ProviderInformation;
const patientDetails = PatientInformation;
const serviceDetails = ServiceInformation;

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
        await loginProviderPage.LoginDetails(loginDetails.ProviderID,loginDetails.OwnerNum,loginDetails.userEmail);

        // Enter the Provider Information page
        await providerInformationPage.ProviderInformation(providerDetails.contactName,providerDetails.TARCompleted,providerDetails.PhoneAreaCode,providerDetails.PhoneAreaPrefix,providerDetails.PhoneAreaSuffix,providerDetails.PhoneExtension)

        // Patient Information
        await patientInformationPage.PatientInformation(patientDetails.MedicalID,patientDetails.PatientLastname,patientDetails.PatientFirstName,patientDetails.PatientDOB)

        // Service page:
        await serviceInformationPage.ServiceInformation(serviceDetails.ServiceCode,serviceDetails.FromDate,serviceDetails.ThroughDate,serviceDetails.AdmitDate,serviceDetails.DischargeDate,serviceDetails.ICD10Code,serviceDetails.DateofOnset)

        // Submit TAR from the services page.
        await TARsubmissionpage.TARSubmission();
        const TCN:any = await TARsubmissionpage.getTARNumber();
        console.log('TCN: '+TCN);

        // TAR Inquiry Page:
        await TARInquirypage.TARInquiry(TCN);
        

    });
