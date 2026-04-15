import{Locator, Page} from '@playwright/test';

class TricentisLoginPage {

    page:Page;
    Automobile:Locator;

    constructor(page:Page){

        this.page = page;
        this.Automobile = page.locator('#nav_automobile');
    }

    async getLaunchURL(){

        await this.page.goto('https://sampleapp.tricentis.com/101/index.php');
    }
    async selectVehicle (){
                // To click on 'Automobile' option
        await this.Automobile.first().click();
        await this.page.waitForLoadState();
    }
}

export {TricentisLoginPage}