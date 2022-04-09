/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type androidLoginScreen = typeof import('./android/screens/LoginScreen');
type androidBoardsScreen = typeof import('./android/screens/BoardsScreen');
type androidMagicLinkScreen = typeof import('./android/screens/MagicLinkScreen');
type androidSignUpScreen = typeof import('./android/screens/SignUpScreen');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, androidLoginScreen: androidLoginScreen, androidBoardsScreen: androidBoardsScreen, androidMagicLinkScreen: androidMagicLinkScreen, androidSignUpScreen: androidSignUpScreen }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
