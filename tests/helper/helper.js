const { faker } = require("@faker-js/faker");

const userWithValidData = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};

const userWithEmptyLogin = {
  username: "",
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};

const userWithEmptyPassword = {
  username: faker.internet.userName(),
  password: "",
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};

const userWithEmptyConfirmation = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
  passwordConfirmation: "",
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};

const userWithEmptyEmail = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: "",
};

module.exports = {
  userWithValidData,
  userWithEmptyLogin,
  userWithEmptyPassword,
  userWithEmptyConfirmation,
  userWithEmptyEmail,
};
