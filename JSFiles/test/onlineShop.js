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
const homePage_1 = require("../pageObjects/homePage");
const mocha_1 = require("mocha");
let expect = require('chai').expect;
const userData_1 = require("../testData/userData");
const log = require("../logFile/logging").default;
let home = new homePage_1.HomePage();
mocha_1.describe('Testing petclinic application ', function () {
    this.beforeAll('Enter application url in the browser window', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(userData_1.default.appUrl);
        });
    });
    mocha_1.it('Should be able to load the page', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getCurrentUrl().then((url) => {
                expect(url).to.equal('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/');
            });
        });
    });
    mocha_1.it('Page title should be valid', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getTitle().then((expectedTitle) => {
                expect(expectedTitle).to.equal('SpringPetclinicAngular');
                log.debug("Title should be = " + expectedTitle);
            });
        });
    });
    mocha_1.it('should able to navigate on Online shop page', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield home.navigateToOnlineShopPage();
        });
    });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            const png = yield protractor_1.browser.takeScreenshot();
            allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25saW5lU2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3Qvb25saW5lU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUEyRjtBQUMzRixzREFBbUQ7QUFDbkQsaUNBQXFDO0FBQ3JDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsbURBQTRDO0FBRTVDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUUxQixnQkFBUSxDQUFDLGdDQUFnQyxFQUFFO0lBRXZDLElBQUksQ0FBQyxTQUFTLENBQUMsNkNBQTZDLEVBQUU7O1lBQzFELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBRSxDQUFDLGlDQUFpQyxFQUFFOztZQUNsQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7WUFDaEcsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBQ0gsVUFBRSxDQUFDLDRCQUE0QixFQUFFOztZQUM3QixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ3pELEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLENBQUE7WUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBQ0YsVUFBRSxDQUFDLDZDQUE2QyxFQUFFOztZQUM5QyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRTFDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFDSCxTQUFTLENBQUM7O1lBQ04sTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7S0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQyJ9