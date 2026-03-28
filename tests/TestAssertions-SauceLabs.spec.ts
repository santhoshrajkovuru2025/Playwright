
import{test,expect} from '@playwright/test' ;

test.describe('Assertion in Plawright',()=>{

    test('Auto-Retrying Assertions', async({page})=>{

        await page.goto('https://www.saucedemo.com/');

        // To Check the count of the login button using of toHaveCount() Assertion.
        await expect(page.getByTestId('login-button')).toHaveCount(1);

        // To Check the Login button is enabled or not using toBeEnabled() and toBeDisabled Assertions:
        await expect(page.getByTestId('login-button')).toBeEnabled();
        // await expect(page.getByTestId('login-button')).toBeDisabled();

        // soft Asertion is the same to verify that doesnt stops the execution of the remaining steps:
        // await expect.soft(page.getByTestId('login-button')).toBeDisabled();

        // To Check the Login button is enabled or not using toBeVisible() and toBeHidden() Assertions:
        await expect(page.getByTestId('login-button')).toBeVisible();
        // await expect(page.getByTestId('login-button')).toBeHidden();

        // To check the Login text is present using the tohaveText() Assertion
        await expect(page.getByTestId('login-button')).toHaveText('Login');

        // To check the attribute value using the toHaveAttribute('Attribute','AttributeValue) Assertions:
        await expect(page.getByPlaceholder('Username')).toHaveAttribute('id','user-name');

        // To check the id of the element using the toHaveId() assertion:
        await expect(page.getByPlaceholder('password')).toHaveId('password');

        // To check the URl of the page using the toHaveURL() Assertion:
        await expect(page).toHaveURL('https://www.saucedemo.com/');

        // To Check the tite of the page using the toHaveTitle() assertion:
        await expect(page).toHaveTitle('Swag Labs');

        // Negative Assertions:
        await expect(page).not.toHaveTitle('Google')

        // To have a custom error message:
        // await expect(page,'This is a Custom Error message').not.toHaveTitle('Swag Labs')

    });
});

