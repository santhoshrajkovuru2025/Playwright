
import {test as base} from '@playwright/test'

export const customTest = base.extend({

    testDataForOrder : async ({},use) => {
        await use ({
    userName : "anshika@gmail.com",
    password: "Iamking@000",
    productName: "iphone 13 pro"
        });
    }
});
