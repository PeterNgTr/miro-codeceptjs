import {generateFullName, generateRandomEmail, generateUuid} from "../utils/common";
import data from "../data";

const { I, androidSignUpScreen, androidLoginScreen  } = inject();
let email;
let password;
let fullName;

Feature("Signup @android");

Before(() => {
    I.waitAndTap(androidLoginScreen.buttons.signUp);
    email = generateRandomEmail();
    password = generateUuid();
    fullName = generateFullName();
})

Scenario("Sign up successfully", async () => {
    await androidSignUpScreen.signUp({ name: fullName, email, password });
    await androidSignUpScreen.confirmScreenShouldBePresent(email);
});

Scenario("Sign up without checking the terms and conditions", async () => {
    await androidSignUpScreen.signUp({ name: fullName, email, password, termsChecked: false });
    await androidSignUpScreen.seeTermsAlertPopup();
});

Scenario("Sign up with password less than 8 chars", async () => {
    password = '12345';
    await androidSignUpScreen.signUp({ name: generateFullName(), email, password });
    await androidSignUpScreen.alertPopupShouldBePresent(data.translations.english.signUp.passwordTooShort);
});

Scenario("Sign up with invalid email", async () => {
    email = 'hellothere@@..qwe';
    await androidSignUpScreen.signUp({ name: generateFullName(), email, password });
    await androidSignUpScreen.alertPopupShouldBePresent(data.translations.english.signUp.invalidEmail);
});
