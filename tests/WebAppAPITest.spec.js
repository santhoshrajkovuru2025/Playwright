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

    // Open "My Orders" page
    await page.locator('button[routerlink="/dashboard/myorders"]').click();

    // Wait until order table is visible
    await page.locator('tbody').waitFor();

    // Locate all rows in the orders table
    const orderRows = page.locator('tbody tr');

    // Loop through each row to find the created order
    for (let i = 0; i < await orderRows.count(); ++i) {

        // Get order ID from the table row
        const rowOrderId = await orderRows.nth(i).locator('th').textContent();

        // Compare with API created order ID
        if (response.orderID.includes(rowOrderId)) {

            // Click "View" button for the matched order
            await orderRows.nth(i).locator('button').first().click();
            break;
        }
    }

    // Capture the order ID displayed in the order details page
    const OrderIdDetails = await page.locator('.col-text').textContent();

    // Validate that the displayed order ID matches the API created order
    expect(response.orderID.includes(OrderIdDetails)).toBeTruthy();

});