require('ts-node/register');
require('import-export');

const {caps} = require("./mobile-capabilities");

exports.config = {
  tests: './**/*Test.ts',
  output: './output',
  helpers: {
    Appium: process.env.PLATFORM === 'android' ? caps.androidCaps : caps.iosCaps,
  },
  include: {
    I: './steps_file.ts',
    androidLoginScreen: './android/screens/LoginScreen.ts',
    androidBoardsScreen: './android/screens/BoardsScreen.ts',
    androidMagicLinkScreen: './android/screens/MagicLinkScreen.ts',
    androidSignUpScreen: './android/screens/SignUpScreen.ts'
  },
  mocha: {},
  name: 'miro-codeceptjs',
  plugins: {}
}

