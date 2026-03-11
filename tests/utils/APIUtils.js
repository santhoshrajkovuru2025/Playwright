
class API_Utils {

    constructor (apiContext,loginPayLoad){

        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }



   async getToken(){

        // Store the API endpoint URL and pyload information in the loginResponse variable 
     const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data:this.loginPayLoad  // 200, 201 - API reponse codes
        })
        // To get the json for the login response and stored in a variable 'loginResponseJson'

        const loginResponseJson = await loginResponse.json()

        // To grab the token value nad stored in variable in 'jsonToken'

        const jsonToken = loginResponseJson.token;
        console.log(jsonToken);
        return jsonToken;
    }

    async CreateOrder(orderPayload){
       
                // object for orderId
                let response ={};
                response.jsonToken = await this.getToken();
                // API Endpoint URL for creating an Order.
                const orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
        
                    // Entering the payload for the creation of Order
                    data: orderPayload,
                    headers: {
                         'Authorization': response.jsonToken,
                         'Content-Type' : 'application/json'
                        },
                    //Header Information for authoization of the user for creating the id.
                    
                });
                const orderResponseJson = await orderResponse.json();
                console.log(orderResponseJson);
                const orderID = orderResponseJson.orders[0];
                response.orderID =orderID;
                return response; // returns the token and order ID
                
    }
}

export {API_Utils};