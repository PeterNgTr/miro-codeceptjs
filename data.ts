const data = {
    packageName: 'com.realtimeboard',
    smallWaitingTimeInSecs: 10,
    account: {
        email: 'peter.nguyentr+miro@gmail.com',
        password: 'Test@123'
    },
    translations: {
        english: {
            allBoards: 'All boards',
            invalidCreds: 'Invalid username or password',
            invalidEmail: `This doesn’t look like an email address`,
            emailSentTo: (email) => `To sign in, use the link we sent to ${email}`,
            signUp: {
                invalidEmail: 'Email is not valid',
                passwordTooShort: 'Password has to be longer than 8 symbols',
            }
        }
    }
}

export default data;
