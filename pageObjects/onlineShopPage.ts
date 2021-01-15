import { ElementFinder, element, by, ElementArrayFinder, browser, ExpectedConditions } from "protractor";
const expect = require('chai').expect;

export class onlineShopPage {

    private pageTitle = element(by.css(".page .page-title"));
    private productList = element.all(by.css('h4.card-title'));

    async getPageTitleText() {
        return await this.pageTitle.getText();
    }
    async getProductList() {
        let elements = await this.productList.all(by.tagName("a"));
        let prodCount = await elements.length;
        let product: string[] = ['Kennel Kitchen', 'Velcote Liquid', 'Pedigree PRO', 'Velcote Premium', 'Mantra Kismis', 'Haldiram Noodles', 'Bingo Mad Angles', 'Bikani Rasogolla']

        for (let i = 1; i <= prodCount; i++) {
            await elements[i - 1].getText().then(async function (prodName) {
                await expect(product[i - 1]).to.equal(prodName);
            });

        };

    }
    getTreatsTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getFoodTitleText(): any {
        throw new Error("Method not implemented.");
    }

    getFirstFoodItemTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getSecondFoodItemTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getThirdFoodItemTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getFourthFoodItemTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getFirstTreatsItemTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getSecondTreatsItemTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getThirdTreatsItemTitleText(): any {
        throw new Error("Method not implemented.");
    }
    getFourthTreatsItemTitleText(): any {
        throw new Error("Method not implemented.");
    }

    getQuantityText(): any {
        throw new Error("Method not implemented.");
    }

    getQuantityMaxValueText(): any {
        throw new Error("Method not implemented.");
    }
    selectQuantityMaxValue() {
        throw new Error("Method not implemented.");
    }
    clickOnQuantity() {
        throw new Error("Method not implemented.");
    }
    getQuantityValue(): any {
        throw new Error("Method not implemented.");
    }

    getPopUpText(): any {
        throw new Error("Method not implemented.");
    }
    clickOnAddToCartButton() {
        throw new Error("Method not implemented.");
    }
    getAddToCartButtonText(): any {
        throw new Error("Method not implemented.");
    }

    getErrorMessageText(): any {
        throw new Error("Method not implemented.");
    }
}


