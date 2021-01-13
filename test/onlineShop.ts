import { browser, ProtractorExpectedConditions, ExpectedConditions, by } from "protractor";
import { HomePage } from "../pageObjects/homePage";
import { describe, it } from 'mocha';
let expect = require('chai').expect;
import testdata from "../testData/userData";
declare const allure: any;
const log = require("../logFile/logging").default;
let home = new HomePage();

describe('Testing petclinic application ', function () {

    this.beforeAll('Enter application url in the browser window', async function () {
        await browser.get(testdata.appUrl);
    });

    it('Should be able to load the page', async function () {
        await browser.getCurrentUrl().then((url) => {
            expect(url).to.equal('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/');
        })
    });
    it('Page title should be valid', async function () {
        await browser.getTitle().then((expectedTitle) => {
            expect(expectedTitle).to.equal('SpringPetclinicAngular');
            log.debug("Title should be = " + expectedTitle)
        })

    })
    it('should able to navigate on Online shop page', async function () {
        await home.navigateToOnlineShopPage();

    });
    afterEach(async function () {
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    })

});
