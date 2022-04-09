import {editTextContains, textViewContains} from "../decorators/Locators";

const { I } = inject();

export = {
    fields: {
        email: editTextContains({ text: 'mail' }),
    },

    buttons: {
        sendMagicLink: textViewContains({ text: 'Send me the Magic Link' })
    },

    sendMagicLink(email) {
        I.waitAndFillField(this.fields.email, email);
        I.waitAndTap(this.buttons.sendMagicLink);
    }

}
