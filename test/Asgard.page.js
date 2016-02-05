browser.params.fixtures.AsgardPage = function () {
    var map = new browser.params.fixtures.AsgardPageMap();
    //var map = fixtures.AsgartPageMap;

    this.clickInCreate = function () {
        map.getNewDataGatewayButton().click();
    };

    this.writeInSearchBar = function (text) {
        map.getSearchBar().sendKeys(text);
    };

    this.clikInOrderByName = function () {
        map.getSortName().click();
    };

    this.validateGatewaysAcount = function (acount) {
        expect(map.getGatewaysTable().count()).toEqual(acount);
    };

    this.validateGatewayName = function (index, expectedName) {
        expect(map.getNameGatewaysList().get(index).getText()).toEqual(expectedName);
    };
    
    this.validateLeftBarStyle = function() {
        expect(map.getLeftBar().getCssValue('background-color')).toEqual('rgba(54, 127, 169, 1)');  
    };
    
    this.validateGatewayMenuName = function() {
        expect(map.getGatewaysTab().getText()).toEqual('Gateways');
    };
    
    this.validateTitle = function() {
        expect(browser.getTitle()).toEqual('Mulesoft Asgard');
    };
};