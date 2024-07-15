const userLoginField = "#user_login";
const userPasswordField = "#user_password";
const userPasswordConfirmationField = "#user_password_confirmation";
const userFirstNameField = "#user_firstname";
const userLastNameField = "#user_lastname";
const userEmailField = "#user_mail";
const submitFormButton = 'input[type="submit"]';
const errorMessageSelector = "#errorExplanation";

class RegistrationPage {
  constructor(page) {
    this.page = page;
  }

  async fillRegistrationForm(user) {
    await this.page.fill(userLoginField, user.username);
    if (user.password.length >= 8) {
      await this.page.fill(userPasswordField, user.password);
    }
    if (user.passwordConfirmation !== undefined) {
      await this.page.fill(
        userPasswordConfirmationField,
        user.passwordConfirmation
      );
    } else {
      await this.page.fill(userPasswordConfirmationField, user.password);
    }
    await this.page.fill(userFirstNameField, user.firstName);
    await this.page.fill(userLastNameField, user.lastName);
    await this.page.fill(userEmailField, user.email);
  }

  async clickSubmitButton() {
    await this.page.locator(submitFormButton).click();
  }

  async getErrorMessage() {
    return await this.page.textContent(errorMessageSelector);
  }
}

module.exports = RegistrationPage;
