describe('Application Test', function () {

    it('should have a title', function () {
        browser.get('http://localhost:3000/');
        expect(browser.getTitle()).toEqual('Mulesoft Asgard');
    });

    it('should have Gateway link in left menu', function () {
        browser.get('http://localhost:3000/');
        expect(element(by.xpath('/html/body/div/aside[1]/section/ul/li[1]/a/span')).getText()).toEqual('Gateways');
    });

    it('should have backgroud color #367fa9', function () {
        browser.get('http://localhost:3000/');

        var leftBar = element(by.xpath('/html/body/div/aside[1]'));
        var cssColor = leftBar.getCssValue('background-color');
        expect(cssColor).toEqual('rgba(54, 127, 169, 1)');
    });

    it('should have shown ten gateways', function () {
        browser.get('http://localhost:3000/');
        var gateways = element.all(by.repeater('gateway in dataGateways'));
        expect(gateways.count()).toEqual(10);
    });

    it('should have first gateways 1 SAP Tres', function () {
        browser.get('http://localhost:3000/');
        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
        expect(gateways.first().getText()).toEqual('1 SAP Tres');
    });

    it('should have first ZAP 2 gateway when use sort by name', function () {
        browser.get('http://localhost:3000/');
        element(by.id('sort-name')).click();
        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
        expect(gateways.first().getText()).toEqual('ZAP 2');
    });

    it('should have first 1 SAP Tres gateways when use two times sort by name', function () {
        browser.get('http://localhost:3000/');
        element(by.id('sort-name')).click();
        element(by.id('sort-name')).click();
        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
        expect(gateways.first().getText()).toEqual('1 SAP Tres');
    });

    it('should have obtain two elements when filter by Oracle', function () {
        browser.get('http://localhost:3000/');
        element(by.model('searchDataGateway')).sendKeys('Oracle');

        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));

        expect(gateways.count()).toEqual(2);
        expect(gateways.get(0).getText()).toEqual('Oracle');
        expect(gateways.get(1).getText()).toEqual('Other Oracle Gateway');
    });

    it('Create a new gateway', function () {
        browser.get('http://localhost:3000/');

        element(by.id('add-new-gateway')).click();
        element(by.id('name')).sendKeys('New gateway');
        element(by.id('description')).sendKeys('The description for my test');
        element(by.id('username')).sendKeys('isalepb');
        element(by.id('password')).sendKeys('abc123');
        element(by.id('repeat_password')).sendKeys('abc123');
        element(by.id('save-gateway')).click();
        
        var gateways = element.all(by.repeater('gateway in dataGateways'));
        expect(gateways.count()).toEqual(11);
    });
});