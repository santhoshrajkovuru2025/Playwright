// Import required modules from Playwright
// 'request' is used for making API calls
import { test, expect, request } from '@playwright/test';

// Import API utility class to reuse API methods
import {API_Utils} from './utils/APIUtils';

// Login payload containing user credentials
const loginPayLoad = {
    userEmail: "srkovuru@outlook.com",
    userPassword: "Ks@nthosh@123!"
};

// Order payload used to create an order via API
const orderPayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]
};

// Global variable to store API response (token + orderId)
// This will be used inside the test
let response;

// Runs once before all tests
test.beforeAll(async () => {

    // Create a new API request context
    const apiContext = await request.newContext();

    // Initialize API utility class with API context and login payload
    const api_utils = new API_Utils(apiContext, loginPayLoad);

    // Create an order using API and store the response
    // Response contains both authentication token and order ID
    response = await api_utils.CreateOrder(orderPayload);

});

test('Place an order in the Client App using API call', async ({ page }) => {

    // Inject token into browser localStorage before page loads
    // This bypasses the login UI and directly authenticates the session
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.jsonToken);

    // Navigate to the client application
    await page.goto('https://rahulshettyacademy.com/client/');

    // Routing the page to the URL for mocking the orders page

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/69a6aab1415d779f9b53adaf',
    route =>{

        // Intercepting the response -> API Response -> Browser -> Render the data at front end
        


    });

    // Open "My Orders" page
    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    // Wait until order table is visible
    await page.locator('tbody').waitFor();

    // Locate all rows in the orders table
    const orderRows = page.locator('tbody tr');

   

});