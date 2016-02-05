browser.params.fixtures.AsgardPageMap = function () {

    this.getGatewaysTab = function () {
        return element(by.xpath('/html/body/div/aside[1]/section/ul/li[1]/a/span'));
    };

    this.getLeftBar = function () {
        return element(by.xpath('/html/body/div/aside[1]'));
    };

    this.getGatewaysTable = function () {
        return element.all(by.repeater('gateway in dataGateways'));
    };

    this.getNameGatewaysList = function () {
        return element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
    };

    this.getNewDataGatewayButton = function () {
        return element(by.id('add-new-gateway'));
    };

    this.getSortName = function () {
        return element(by.id('sort-name'));
    };

    this.getSearchBar = function () {
        return element(by.model('searchDataGateway'));
    };
};