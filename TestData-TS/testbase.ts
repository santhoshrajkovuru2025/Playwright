import { test as baseTest } from '@playwright/test';

interface TestDataForOrder {
  
    userName: string;
    password: string;
    productName: string;
};

const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>({
  testDataForOrder: {
      userName: "anshika@gmail.com",
      password: "Iamking@000",
      productName: "iphone 13 pro"
  }
    });
  


export {customTest};