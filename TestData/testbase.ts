import { test as base } from '@playwright/test';

type TestData = {
  testDataForOrder: {
    userName: string;
    password: string;
    productName: string;
  };
};

const customTest = base.extend<TestData>({
  testDataForOrder: async ({}, use) => {
    await use({
      userName: "anshika@gmail.com",
      password: "Iamking@000",
      productName: "iphone 13 pro"
    });
  }
});

export { customTest };