
import{test, expect} from '@playwright/test'

test('Login to the Provider Portal',async({browser})=>{

    const Context = await browser.newContext();
    const page = await Context.newPage();
    const providerID = page.locator('#pname');
    const ownerNum = page.locator('#oname');
    const eMail = page.locator('#emailId');
    const Environment = page.locator("select[data-val-required*='The']")
    const showURL= page.locator('#txt_ShowUrl')
    const medicalServices = page.locator('#LinkMedicalServices')
    await page.goto('https://silsr.softsol.com:6118/ProviderPortalSimulator?handler=login');
    await providerID.fill('1548201965')
    await ownerNum.fill('01')
    await eMail.fill('santhoshraj.kovuru@softsol.com')
    await Environment.selectOption('DEV');
    await showURL.click();
    await medicalServices.click();
    console.log(await page.title());
    await expect(page).toHaveTitle('Medi-Cal: Treatment Authorization Request Menu');
});