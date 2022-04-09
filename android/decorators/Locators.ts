export function editTextContains({ text }) {
    return `//android.widget.EditText[contains(@text, "${text}")]`;
}

export function textViewEquals({ text }) {
    return `//android.widget.TextView[@text="${text}"]`;
}

export function textViewContains({ text }) {
    return `//android.widget.TextView[contains(@text, "${text}")]`;
}

export function viewGroupWithIndex({ index }) {
    return `//android.view.ViewGroup[${index}]`;
}
