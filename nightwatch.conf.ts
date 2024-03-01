module.exports = {

  test_settings: {
    cucumber: {
      test_runner: {
        type: 'cucumber',
        options: {
          format: [
            'json:reports/cucumber-report.json',
            'html:reports/cucumber-report.html'
          ]
        }
      },
      output_folder: false,
    },

    'cucumber.api': {
      extends: 'cucumber',
      test_runner: {
        options: {
          feature_path: 'nightwatch/tests/api/*.feature',
          auto_start_session: false
        },
      },
      start_session: false,
      webdriver: {
        start_process: false,
      },
      src_folders: ['nightwatch/tests/api']
    },

    'cucumber.browser': {
      extends: 'cucumber',
      test_runner: {
        options: {
          feature_path: 'nightwatch/tests/browser/*.feature',
        }
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
        }
      },
      webdriver: {
        start_process: true,
      },
      src_folders: ['nightwatch/tests/browser']
    },

    'cucumber.browser.androidEmulator': {
      extends: 'cucumber.browser',
      desiredCapabilities: {
        real_mobile: false,
        avd: 'nightwatch-android-11',
        'goog:chromeOptions': {
          androidPackage: 'com.android.chrome',
        },
      },
      webdriver: {
        server_path: 'nightwatch/tests/browser/chromedriver.exe',
      }
    },
    
    'cucumber.browser.androidReal': {
      extends: 'cucumber.browser',
      desiredCapabilities: {
        real_mobile: true,
        'goog:chromeOptions': {
          androidPackage: 'com.android.chrome',
        },
      },
    },
    
    'cucumber.mobileApp': {
      extends: 'cucumber',
      test_runner: {
        options: {
          feature_path: 'nightwatch/tests/mobileApp/*.feature',
        }
      },
      selenium: {
        start_process: true,
        use_appium: true,
        host: 'localhost',
        port: 4723,
        server_path: '',
        cli_args: [
          '--allow-insecure=chromedriver_autodownload'
        ],
        default_path_prefix: ''
      },
      webdriver: {
        timeout_options: {
          timeout: 150000,
          retry_attempts: 3
        },
        keep_alive: false,
        start_process: false
      },
      src_folders: ['nightwatch/tests/mobileApp']
    },
    
    'cucumber.mobileApp.androidEmulator': {
      extends: 'cucumber.mobileApp',
      'desiredCapabilities': {
        browserName: null,
        platformName: 'android',
        'appium:options': {
          automationName: 'UiAutomator2',
          avd: 'nightwatch-android-11',
          app: `${__dirname}/nightwatch/test-mobile-app/SimplyPlan.apk`,
          appPackage: 'co.uk.simplyhealth.simplyplan',
          appActivity: 'co.uk.simplyhealth.simplyplan.MainActivity',
          newCommandTimeout: 0
        }
      }
    },

    'cucumber.mobileApp.androidReal': {
      extends: 'cucumber.mobileApp',
      'desiredCapabilities': {
        browserName: null,
        platformName: 'android',
        'appium:options': {
          automationName: 'UiAutomator2',
          app: `${__dirname}/nightwatch/test-mobile-app/SimplyPlan.apk`,
          appPackage: 'co.uk.simplyhealth.simplyplan',
          appActivity: 'co.uk.simplyhealth.simplyplan.MainActivity',
          newCommandTimeout: 0,
        }
      }
    }
  },
  
};
