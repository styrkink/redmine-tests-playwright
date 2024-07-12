const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page')
const MainPage = require('../pages/main.page');

test.describe('Login test cases', () => {
    let loginPage;
    let mainPage;

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        loginPage = new LoginPage(page);
        await mainPage.openMainPage();
        await mainPage.clickSignInButton();
    })

    test.afterEach(async () => {
        await mainPage.clickLogoutButton();
    })

    test('Login with valid data', async () => {
        await loginPage.fillLoginForm();
        await loginPage.clickLoginButton();
        await expect(await mainPage.checkLoggedAsSelector()).toBeVisible();
    });
})