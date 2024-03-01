# poc-nightwatch-cucumber
A POC for using Nightwatch.js in Cucumber.js.

Tests are written with [Nightwatch.js](https://nightwatchjs.org/guide/overview/what-is-nightwatch.html), using [Cucumber.js](https://cucumber.io/docs/guides/overview/) as an [integrated test runner](https://nightwatchjs.org/guide/writing-tests/using-cucumberjs.html#using-cucumberjs-with-nightwatch).

Based on the initialisation command:

`npm init nightwatch`

## Requirements

Includes android tests via appium, which requires:

[Java development sdk (v9+)](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)
- Add the JAVA_HOME system environment variable, e.g.

  `C:\Program Files\Java\jdk-21`

[Android sdk (included in Android Studio)](https://developer.android.com/studio):
- Add the ANDROID_HOME system environment variable, e.g.

  `C:\Users\**USERNAME**\AppData\Local\Android\sdk`

The relevant ChromeDriver.exe for the emulator:
- ChromeDriver.exe (v83) is required for the emulator included with the nightwatch initialisation:

  `C:\Dev\try-nightwatch\nightwatch\test-browser\chromedriver.exe`

## Installation
Requires [Node.js](https://nodejs.org/).

Dependencies can then be installed via the following command:

`npm i`

The android tests also require further setup, including the installation of the used AVD (nightwatch-android-11):

`npx @nightwatch/mobile-helper android --appium`

### VSCode & Cucumber
VSCode has a useful cucumber extension providing useful functionality such as navigation between feature files and step definitions.

Install:

`CucumberOpen.cucumber-official`

Add the following file to the root of the project:

`.vscode/settings.json` 
```
{
    "cucumber.glue": [
        "cypress/tests/**/*.ts"
    ]
}
```

## Run Example Tests

**Run api tests**:

* Note Nightwatch.js does have built in API support, but I have so far struggled to get this to work with Cucumber.js, so I have used [supertest](https://github.com/ladjs/supertest) instead.
* https://github.com/nightwatchjs/nightwatch-plugin-apitesting/issues/9

`npx nightwatch --env cucumber.api`

**Run browser tests**:

`npx nightwatch --env cucumber.browser`

`npx nightwatch --env cucumber.browser.androidEmulator`

`npx nightwatch --env cucumber.browser.androidReal`

**Run app tests** *(NOT YET WORKING)*:

* Make sure your device is connected with USB Debugging turned on.
* Make sure required browsers are installed.

`npx nightwatch --env cucumber.mobileApp.androidEmulator`

`npx nightwatch --env cucumber.mobileApp.androidReal`