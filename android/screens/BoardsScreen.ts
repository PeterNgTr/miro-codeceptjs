import {textViewEquals} from "../decorators/Locators";
import data from "../../data";

const { I } = inject();

export = {
    buttons: {
        gotIt: textViewEquals({ text: 'Got it' }),
    },

    async isLoggedIn() {
        await I.wait(data.smallWaitingTimeInSecs);
        const element = await I.grabNumberOfVisibleElements(this.buttons.gotIt);

        if (element > 0) {
            I.tap(this.buttons.gotIt);
        }

        I.waitAndSeeText(data.translations.english.allBoards);
    },
}
