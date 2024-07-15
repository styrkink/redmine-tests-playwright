const credentials = require("../utils/credentials.json");

const noticeMessageSelector = "#flash_notice";
const loginInput = "#username";
const passwordInput = "#password";
const loginButton = "#login-submit";

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async fillLoginForm() {
    await this.page.fill(loginInput, credentials.login);
    await this.page.fill(passwordInput, credentials.password);
  }

  async clickLoginButton() {
    await this.page.locator(loginButton).click();
  }

  async getNoticeMessage() {
    return await this.page.textContent(noticeMessageSelector);
  }
}

module.exports = LoginPage;
