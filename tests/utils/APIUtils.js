
// Utility class to handle API operations such as authentication and order creation

class API_Utils {

    // Constructor initializes API request context and login payload
    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;      // Playwright API request context
        this.loginPayLoad = loginPayLoad;  // Login request body (email, password, etc.)
    }

    // Method to generate an authentication token
    async getToken() {

        // Send POST request to login API with login payload
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data: this.loginPayLoad   // Login request payload
            }
        );

        // Convert API response to JSON format
        const loginResponseJson = await loginResponse.json();

        // Extract the authentication token from the response
        const jsonToken = loginResponseJson.token;

        // Print token in console (useful for debugging)
        console.log(jsonToken);

        // Return token for further API calls
        return jsonToken;
    }

    // Method to create an order using the authentication token
    async CreateOrder(orderPayload) {

        // Object to store token and orderId
        let response = {};

        // Get authentication token
        response.jsonToken = await this.getToken();

        // Send POST request to create a new order
        const orderResponse = await this.apiContext.post(
            'https://rahulshettyacademy.com/api/ecom/order/create-order',
            {
                // Order request body
                data: orderPayload,

                // Headers required for authorization and content type
                headers: {
                    'Authorization': response.jsonToken,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Convert order API response to JSON
        const orderResponseJson = await orderResponse.json();

        // Print order response for debugging
        console.log(orderResponseJson);

        // Extract order ID from response
        const orderID = orderResponseJson.orders[0];

        // Store order ID in response object
        response.orderID = orderID;

        // Return both token and order ID
        return response;
    }
}

// Export the API_Utils class so it can be imported in test files
export { API_Utils };