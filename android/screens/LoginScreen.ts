import {editTextContains, textViewContains, textViewEquals} from "../decorators/Locators";

const { I } = inject();

export = {
    fields: {
        email: editTextContains({ text: 'mail' }),
        password: editTextContains({ text: 'password' }),
    },

    buttons: {
        signIn: textViewEquals({ text: 'Sign In' }),
        getMagicLink: textViewContains({ text: 'Get Magic link' }),
        signUp: textViewEquals({ text: 'Sign up' }),
    },

    inputEmail(email) {
        I.waitAndFillField(this.fields.email, email);
    },

    inputPassword(password) {
        I.waitAndFillField(this.fields.password, password);
    },

    login(email, password) {
        this.inputEmail(email);
        this.inputPassword(password);
        I.waitAndTap(this.buttons.signIn);
    },
}
