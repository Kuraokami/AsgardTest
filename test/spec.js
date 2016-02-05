describe('Protractor Demo App', function () {
});

describe('Application Test', function () {

    xit('should have a title', function () {
        browser.get('http://localhost:3000/');
        expect(browser.getTitle()).toEqual('Mulesoft Asgard');
    });

    xit('should have Gateway link in left menu', function () {
        browser.get('http://localhost:3000/');

        expect(element(by.xpath('/html/body/div/aside[1]/section/ul/li[1]/a/span')).getText()).toEqual('Gateways');
    });

    xit('should have Connections link in left menu', function () {
        browser.get('http://localhost:3000/');

        expect(element(by.xpath('/html/body/div/aside[1]/section/ul/li[2]/a/span')).getText()).toEqual('Connections');
    });

    xit('should have backgroud color #367fa9', function () {
        browser.get('http://localhost:3000/');

        var leftBar = element(by.xpath('/html/body/div/aside[1]'));
        var cssColor = leftBar.getCssValue('background-color');

        /*        
              leftBar.getCssValue('background-color').then(function(bgColor) {
                    console.log(bgColor);
                });
              
                console.log(cssColor);
                expect(cssColor).toEqual('rgba(54, 127, 169, 1)');
        */
        /*
        
        console.log(cssColor);
       */

    });

    xit('should have shown two gateways', function () {
        browser.get('http://localhost:3000/');
        var gateways = element.all(by.repeater('gateway in dataGateways'));
        expect(gateways.count()).toEqual(2);
    });

    xit('should have first gateways MySql', function () {
        browser.get('http://localhost:3000/');
        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
        expect(gateways.first().getText()).toEqual('Microsoft SQL Server');
    });

    xit('should have first gateways MySql', function () {
        browser.get('http://localhost:3000/');
        element(by.model('sort-name')).click();
        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
        expect(gateways.first().getText()).toEqual('Oracle');
    });

    xit('should have first gateways MySql', function () {
        browser.get('http://localhost:3000/');
        element(by.model('sort-name')).click();
        element(by.model('sort-name')).click();
        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
        expect(gateways.first().getText()).toEqual('Microsoft SQL Server');
    });

    xit('should have first gateways MySql', function () {
        browser.get('http://localhost:3000/');
        element(by.model('searchDataGateway')).sendKeys('Oracle');

        var gateways = element.all(by.repeater('gateway in dataGateways').column('gateway.name'));
        expect(gateways.count()).toEqual(1);
        expect(gateways.first().getText()).toEqual('Oracle');
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
    });
});