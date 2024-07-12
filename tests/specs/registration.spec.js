const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/registration.page');
const LoginPage = require('../pages/login.page');
const MainPage = require('../pages/main.page');
const { faker } = require('@faker-js/faker');

const userWithValidData = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
}

const userWithEmptyLogin = {
    username: '',
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
}

const userWithEmptyPassword = {
    username: faker.internet.userName(),
    password: '',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
}

const userWithEmptyConfirmation = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    passwordConfirmation: '',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
  }

const userWithEmptyEmail = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: ''
}

let registrationPage;
let loginPage;
let mainPage;

test.describe('Register test cases', async () => {
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        registrationPage = new RegistrationPage(page);
        loginPage = new LoginPage(page);

        await mainPage.openMainPage();
        await mainPage.clickRegisterButton();
    });

    test('Sign up with empty Login field', async ({page}) => {
        await registrationPage.fillRegistrationForm(userWithEmptyLogin);
        await registrationPage.clickSubmitButton();
        expect(page).toHaveURL('/account/register');
        expect(await registrationPage.getErrorMessage()).toContain('Login cannot be blank');
    });

    test('Sign up with empty Password field', async ({page}) => {
        await registrationPage.fillRegistrationForm(userWithEmptyPassword);
        await registrationPage.clickSubmitButton();
        expect(page).toHaveURL('/account/register');
        expect(await registrationPage.getErrorMessage()).toContain('Password is too short (minimum is 8 characters)');
      });
    
      test('Sign up with empty Password Confirmation field', async ({page}) => {
        await registrationPage.fillRegistrationForm(userWithEmptyConfirmation);
        await registrationPage.clickSubmitButton();
        expect(page).toHaveURL('/account/register');
        expect(await registrationPage.getErrorMessage()).toContain('Password doesn\'t match confirmation');
      });
    
      test('Sign up with empty Email field', async ({page}) => {
        await registrationPage.fillRegistrationForm(userWithEmptyEmail);
        await registrationPage.clickSubmitButton();
        expect(page).toHaveURL('/account/register');
        expect(await registrationPage.getErrorMessage()).toContain('Email cannot be blank');
      });
      
      test('Sign up with valid data', async ({page}) => {
        await registrationPage.fillRegistrationForm(userWithValidData);
        await registrationPage.clickSubmitButton();
        expect(page).toHaveURL('/login');
        expect(await loginPage.getNoticeMessage()).toContain('Account was successfully created. An email containing the instructions to activate your account was sent');
      });
});