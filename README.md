# Introduction

Automation tests for Miro app using CodeceptJS - Appium Helper.

# How to use

This automated test is done using CodeceptJS https://codecept.io/

### Tech

Using a number of open source projects to work properly:

* https://nodejs.org/en/ - evented I/O for the backend
* https://codecept.io/ - CodeceptJS
* Java SDK
* App inspector - https://macacajs.github.io/app-inspector/

Android:

- You need to set those following env vars in your terminal profile:

```
export ANDROID_SDK_ROOT=/Users/$(whoami)/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_102.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

- You need to install the Android Emulators -> https://developer.android.com/studio/run/emulator

### Installation

- This automation test suite requires [Node.js](https://nodejs.org/) v12+ to run.
- Install the dependencies and devDependencies.

```sh
$ cd miro-codeceptjs
$ npm i
```

### How to trigger the tests

You need to start the appium server first:
```sh
$ npx appium
```

Run android tests:
```sh
$ npx codeceptjs run --verbose --grep @android
```

![A Running Test](http://g.recordit.co/Aa6QbzGXnm.gif)

What are you seeing on the console log when running with verbose mode:

```shell
> export PLATFORM=android && codeceptjs run --verbose --grep @android

CodeceptJS v3.2.2
Using test root "/Users/thanh/Desktop/miro-codeceptjs"
Helpers: Appium
Plugins: screenshotOnFail

Signup @android --
    [1]  Starting recording promises
    Timeouts: 
  Sign up with invalid email
    --- STARTED "before each" hook: Before for "Sign up with invalid email" ---
    I: waitAndTap "//android.widget.TextView[@text="Sign up"]"
      I wait for element "//android.widget.TextView[@text="Sign up"]", 10
      I tap "//android.widget.TextView[@text="Sign up"]"
    --- ENDED "before each" hook: Before for "Sign up with invalid email" ---
    androidSignUpScreen: signUp {"name":"Israel Heidenreich V","email":"hellothere@@..qwe","password":"2cbeb8eb-cc33-4f03-82b6-0f0761ebbc96"}
      I wait for element "//android.widget.EditText[contains(@text, "name")]", 10
      I fill field "//android.widget.EditText[contains(@text, "name")]", "Israel Heidenreich V"
      I wait for element "//android.widget.EditText[contains(@text, "email")]", 10
      I fill field "//android.widget.EditText[contains(@text, "email")]", "hellothere@@..qwe"
      I wait for element "//android.widget.EditText[contains(@text, "password")]", 10
      I fill field "//android.widget.EditText[contains(@text, "password")]", "2cbeb8eb-cc33-4f03-82b6-0f0761ebbc96"
      I wait for element "//android.widget.TextView[@text="I agree to Miro Terms of Service and Privacy Policy"]", 10
      I tap "//android.widget.TextView[@text="I agree to Miro Terms of Service and Privacy Policy"]"
      I wait for element "//android.widget.TextView[@text="I agree to receive news and product updates from Miro"]", 10
      I tap "//android.widget.TextView[@text="I agree to receive news and product updates from Miro"]"
      I press key "Enter"
    androidSignUpScreen: alertPopupShouldBePresent "Email is not valid"
      I wait for text "Email is not valid", 10
      I see "Email is not valid"
  ✔ OK in 9212ms


  OK  | 1 passed   // 21s
```

Run a specific test for debugging:


```sh
//adding .only to the scenario you wanna to run
Scenario.only("Sign up with invalid email", async () => {
    email = 'hellothere@@..qwe';
    await androidSignUpScreen.signUp({ name: generateFullName(), email, password });
    await androidSignUpScreen.alertPopupShouldBePresent(data.translations.english.signUp.invalidEmail);
});

//then executing the tests normally, it will trigger only the test you added the .only
$ npx codeceptjs run --verbose --grep @android
```

## Troubleshooting
- If you encounter the following issue when executing tests -> run `npm run fix-error` 

```shell
thanh@Thanhs-MacBook-Pro miro-codeceptjs % npm run android-tests

> export PLATFORM=android && codeceptjs run --verbose --grep @android

creating output directory: /Users/thanh/Desktop/miro-codeceptjs/output
/Users/thanh/Desktop/miro-codeceptjs/node_modules/@cucumber/tag-expressions/test/tag_expression_parser_test.ts:1
import assert from 'assert'
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at compileFunction (<anonymous>)

```

- If you encounter the following issue, you perhaps are not starting the appium server -> run `appium`

```
Please make sure Selenium Server (ChromeDriver or PhantomJS) is running and accessible
Error: Can't connect to WebDriver.
Error: Failed to create session.
Unable to connect to "http://0.0.0.0:4723/wd/hub", make sure browser driver is running on that address.
If you use services like chromedriver see initialiseServices logs above or in wdio.log file as the service might had problems to start the driver.

Please make sure Selenium Server (ChromeDriver or PhantomJS) is running and accessible

```
