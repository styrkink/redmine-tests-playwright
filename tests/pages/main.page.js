const registerButton = 'a.register';
const signInButton = 'a.login';
const logoutButton = 'a.logout';
const loggedAsSelector = '#loggedas';

class MainPage {
    constructor(page) {
      this.page = page;
    }

    async openMainPage() {
        await this.page.goto('/');
    }

    async clickRegisterButton() {
        await this.page.locator(registerButton).click();
    }

    async clickSignInButton() {
        await this.page.locator(signInButton).click();
    }

    async clickLogoutButton() {
        await this.page.locator(logoutButton).click();
    }

    async checkLoggedAsSelector() {
        return await this.page.locator(loggedAsSelector);
    }
}

module.exports = MainPage;