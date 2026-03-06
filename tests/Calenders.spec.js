 
 import{test,expect} from '@playwright/test'

 test('Handling Calenders', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const topDeals = page.getByRole('link',{name:'Top Deals'});
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    const monthNumber = "6";
    const date = "14";
    const year = "2027";
    const expectedDate = [monthNumber,date,year];
        
        const [newPage]= await Promise.all([
            context.waitForEvent('page'),
            topDeals.click(),
        ]);
        
        await newPage.locator('.react-date-picker__inputGroup').click();
        // For clicking on Month and Year
        await newPage.locator('.react-calendar__navigation__label__labelText').click();
        // For clicking on Year
        await newPage.locator('.react-calendar__navigation__label__labelText').click();
        // To get the text of the year
        await newPage.getByText(year).click();
        // For selecting the Month
        await newPage.locator('.react-calendar__year-view__months__month').nth(Number(monthNumber)-1).click();
        // To get the date in the selected month
        await newPage.locator("//abbr[text()='"+date+"']").click();
        // validating the date with the assertion
        const inputDate =  newPage.locator('.react-date-picker__inputGroup input')
        // For loop to verify the expecteddate to the given input date.
/*         for(let i=0;i<=expectedDate.length;i++)
        {
           const value = await inputDate.nth(i).inputValue();
           expect(value).toEqual(expectedDate[1]);
            
        } */

 });

 test('handling Elements in Calender', async({page})=>{
    console.log('Test Check')

 });