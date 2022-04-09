import {editTextContains, textViewEquals} from "../decorators/Locators";
import data from "../../data";

const { I } = inject();

export = {

    fields: {
        name: editTextContains({ text: 'name' }),
        email: editTextContains({ text: 'email' }),
        password: editTextContains({ text: 'password' })
    },
    checkboxes: {
        terms:  textViewEquals({ text: 'I agree to Miro Terms of Service and Privacy Policy' }),
        subscriptions: textViewEquals({text: 'I agree to receive news and product updates from Miro' }),
    },

    alertPopup: {
        title:  textViewEquals({ text: 'Review the Terms'}),
        text:  textViewEquals({ text: 'Please agree to Miro Terms of Service and Privacy policy before signing up' }),
    },

    confirmationScreen: {
        container: `#${data.packageName}:id/action_bar_root`,
        title: textViewEquals({ text: 'Confirmation' }),
        text: (email) => `//android.widget.TextView[@text="We've sent you a six-digit confirmation code to ${email}. Please enter it below to confirm your email address."]`,
        codeInput: "//android.widget.EditText",
        confirmButton: textViewEquals({ text: 'Confirm' })
    },

    async signUp({ name, email, password, termsChecked = true, subscriptions = true }){
        I.waitAndFillField(this.fields.name, name);
        I.waitAndFillField(this.fields.email, email);
        I.waitAndFillField(this.fields.password, password);

        if (termsChecked) {
            I.waitAndTap(this.checkboxes.terms);
        }

        if (subscriptions) {
            I.waitAndTap(this.checkboxes.subscriptions);
        }

        I.pressKey('Enter');
    },

    confirmScreenShouldBePresent(email) {
        I.waitAndSeeElement(this.confirmationScreen.container);
        I.waitAndSeeElement(this.confirmationScreen.title);
        I.waitAndSeeElement(this.confirmationScreen.text(email));
        I.waitAndSeeElement(this.confirmationScreen.codeInput);
        I.waitAndSeeElement(this.confirmationScreen.confirmButton);
    },

    seeTermsAlertPopup() {
        I.waitAndSeeElement(this.alertPopup.title);
        I.waitAndSeeElement(this.alertPopup.text);
    },

    alertPopupShouldBePresent(text) {
        I.waitAndSeeText(text);
    }
}
