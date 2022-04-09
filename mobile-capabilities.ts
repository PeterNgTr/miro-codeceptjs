import data from "./data";

export {};
export const DEFAULT_PORT = 4723;
export const caps = {
    androidCaps: {
        app: './build/miro.apk',
        platform: 'android',
        device: 'emulator',
        port: DEFAULT_PORT,
        path: '/wd/hub',
        desiredCapabilities: {
            appPackage: data.packageName,
            deviceName: process.env.DEVICE || 'Emulator',
            platformName: process.env.PLATFORM || 'android',
            platformVersion: process.env.OS_VERSION || '12.0',
            automationName: process.env.ENGINE || 'UIAutomator2',
            avd: process.env.UDID || 'Pixel_XL_API_30',
            newCommandTimeout: 300000,
            androidDeviceReadyTimeout: 300000,
            androidInstallTimeout: 90000,
            appWaitDuration: 300000,
            autoGrantPermissions: true,
            gpsEnabled: true,
            isHeadless: false,
            noReset: false,
            noSign: true,
        }
    },

    iosCaps: {
        app: '/build/Miro.app',
        platform: 'ios',
        device: 'simulator',
        port: DEFAULT_PORT,
        path: '/wd/hub',
        desiredCapabilities: {
            deviceName: process.env.DEVICE_NAME || 'iPhone 12 Pro Max Simulator (15.2)',
            platformName: process.env.PLATFORM || 'iOS',
            platformVersion: process.env.OS_VERSION || '15.2',
            udid: process.env.UDID || '14203B12-EA39-44B6-A814-84526EC20BC0',
            launchTimeout: 40000,
            autoDismissAlerts: true,
            showIOSLog: true,
            enableAsyncExecuteFromHttps: true,
            noReset: false,
            noSign: true,
        }
    }
}
