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
exports.HomePage = void 0;
const protractor_1 = require("protractor");
const expect = require('chai').expect;
const log = require("../logFile/logging").default;
class HomePage {
    constructor() {
        this.home = protractor_1.element(protractor_1.by.css('ul.navbar-nav .glyphicon-home'));
        this.pageTitle = protractor_1.element(protractor_1.by.css('app-welcome h1'));
        this.ownersTab = protractor_1.element(protractor_1.by.css('ul.navbar-nav li.dropdown:nth-child(2)'));
        this.vetTab = protractor_1.element(protractor_1.by.css('ul.navbar-nav li.dropdown:nth-child(3)'));
        this.addNewDropdown = protractor_1.element(protractor_1.by.css('[href="/petclinic/owners/add"]'));
        this.allVetDropdown = protractor_1.element(protractor_1.by.css('[href="/petclinic/vets"]'));
        this.onlineShopTab = protractor_1.element(protractor_1.by.css('ul.navbar-nav li:nth-child(6)'));
    }
    navigateToHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.home.click();
        });
    }
    navigateToNewOwnerPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ownersTab.click();
            yield this.addNewDropdown.click();
        });
    }
    navigateToVetPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.vetTab.click();
            yield this.allVetDropdown.click();
        });
    }
    verifyTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pageTitle.getText().then(function (title) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield log.debug(title);
                    yield expect(title).to.equal('Welcome to Petclinic');
                });
            });
        });
    }
    navigateToOnlineShopPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onlineShopTab.click();
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEU7QUFDNUUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEQsTUFBYSxRQUFRO0lBQXJCO1FBRVksU0FBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDeEQsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDOUMsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDdEUsV0FBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDbkUsbUJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUM3RCxrQkFBYSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUF3QjVFLENBQUM7SUFyQmdCLGtCQUFrQjs7WUFDM0IsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtJQUNZLHNCQUFzQjs7WUFDL0IsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFDWSxpQkFBaUI7O1lBQzFCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBQ1ksV0FBVzs7WUFDcEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixLQUFLOztvQkFDckQsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3pELENBQUM7YUFBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFDWSx3QkFBd0I7O1lBQ2pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7Q0FFSjtBQWhDRCw0QkFnQ0MifQ==