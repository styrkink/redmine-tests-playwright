# redmine-tests-playwright

## SUMMARY
This is the repo of test cases for the redmine.org website, including cases for the register and login functionality, automated with the Playwright framework and using the Allure framework for reporting.

## REQUIREMENTS
- Node.js v20.14.10 or higher
- Playwright v1.45.1 or higher
- Allure Commandline v3.0.0-beta.6 or higher
- Faker.js v8.4.1 or higher

## Steps to Install
### 1. Clone the repository
`git clone https://github.com/your-username/your-repo.git
cd your-repo`
### 2. Install dependencies
`npm install`
### 3. Install allure-comandline
- Windows:
`npm install -g allure-commandline --save-dev`
- Mac OS:
`brew install -g allure-commandline --save-dev`

## Steps to Launch
### 1. Run Playwright tests
`npm run test`
other specified test run commands are described in package file

### 2. Run Playwright tests with Allure reporter
`npm run test:allure`

## Steps to creating the report
### 1. Generate Allure report
`npm run allure:results`
### 2. Open Allure report in a browser
`npm run allure:report`

