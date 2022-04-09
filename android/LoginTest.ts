import data from "../data";
import {generateRandomEmail, generateUuid} from "../utils/common";

export {};
const { I, androidLoginScreen, androidBoardsScreen, androidMagicLinkScreen } = inject();

Feature('Login @android');

Scenario('Login successfully with valid email/password', async () => {
    await androidLoginScreen.login(data.account.email, data.account.password);
    await androidBoardsScreen.isLoggedIn();
});

Scenario('Login with valid email and invalid password', async () => {
    await androidLoginScreen.login(data.account.email, generateUuid());
    I.waitAndSeeText(data.translations.english.invalidCreds);
});

Scenario('Login with non existing email and password', async () => {
    await androidLoginScreen.login(generateRandomEmail(), generateUuid());
    I.waitAndSeeText(data.translations.english.invalidCreds);
});

Scenario('Login using magic link - invalid email', async () => {
    I.waitAndTap(androidLoginScreen.buttons.getMagicLink);
    await androidMagicLinkScreen.sendMagicLink(generateUuid());
    I.waitAndSeeText(data.translations.english.invalidEmail);
});

Scenario('Login using magic link - valid email', async () => {
    const email = generateRandomEmail();
    I.waitAndTap(androidLoginScreen.buttons.getMagicLink);
    await androidMagicLinkScreen.sendMagicLink(email);
    I.waitAndSeeText(data.translations.english.emailSentTo(email));
});

