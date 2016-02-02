describe('Protractor Demo App', function() {
});

describe('Application Test', function() {

    xit('should have a title', function() {
        browser.get('http://localhost:3000/');
        expect(browser.getTitle()).toEqual('Mulesoft Asgard');
    });

    xit('should have Gateway link in left menu', function() {
       browser.get('http://localhost:3000/');
       
       expect(element(by.xpath('/html/body/div/aside[1]/section/ul/li[1]/a/span')).getText()).toEqual('Gateways');
    });
    
   xit('should have Connections link in left menu', function() {
       browser.get('http://localhost:3000/');
       
       expect(element(by.xpath('/html/body/div/aside[1]/section/ul/li[2]/a/span')).getText()).toEqual('Connections');
    });
    
    it('should have backgroud color #367fa9', function() {
        browser.get('http://localhost:3000/');
        
        var leftBar = element(by.xpath('/html/body/div/aside[1]'));
        var cssColor = leftBar.getCssValue('background-color');
        /*
      leftBar.getCssValue('background-color').then(function(bgColor) {
            console.log(bgColor);
        });
      */
        console.log(cssColor);
        expect(cssColor).toEqual('rgba(54, 127, 169, 1)');

        /*
        
        console.log(cssColor);
       */
      
    });

});