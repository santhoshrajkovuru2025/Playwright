
import {test} from '@playwright/test'

test.describe('Test Practice for getBy Methods',()=>{

    test('getBy Methods using Orange HRM Application', async({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Identifying the locator using getByPlaceHolder method for userName:

        await page.getByPlaceholder('Username',{exact:true}).pressSequentially('Admin');

        // Identifying the locator using getByPlaceHolder method for password:
        await page.getByPlaceholder('Password',{exact:true}).pressSequentially('admin123');
        
        // Identifying the locator for a text using the getByRole Method and printing it in Console. textContent() method is used to read the text:
        await page.getByRole('button',{name:' Login '}).click();

    });
});