"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    framework: 'mocha',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        // browserName: 'chrome',
        // chromeoptions: {
        //   args: ["--incognito"],
        // } 
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ["--headless"]
        }
    },
    suites: {
        mochaTest: './test/*.js'
    },
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.manage().window().maximize();
        });
    },
    mochaOpts: {
        reporter: 'mocha-allure-reporter',
        timeout: 100000
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1Byb3RyYWN0b3JDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUViLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxPQUFPO0lBRWxCLHdCQUF3QixFQUFFLEtBQUs7SUFDL0IsWUFBWSxFQUNkO1FBQ00seUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsS0FBSztRQUNSLFdBQVcsRUFBRSxTQUFTO1FBRXpCLG9CQUFvQixFQUFFO1lBQ25CLElBQUksRUFBRSxDQUFFLFlBQVksQ0FBRTtTQUN2QjtLQUNEO0lBR0MsTUFBTSxFQUFFO1FBQ0osU0FBUyxFQUFFLGFBQWE7S0FDM0I7SUFDRCxTQUFTLEVBQUU7O1lBQ1AsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFRCxTQUFTLEVBQUU7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0NBQ0osQ0FBQSJ9