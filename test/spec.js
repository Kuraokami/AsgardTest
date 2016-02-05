describe('Application Test', function () {

    var asgardPage = new browser.params.fixtures.AsgardPage();
    var newGatewayPage = new browser.params.fixtures.AddNewDataGatewayPage();

    beforeEach(function () {
        browser.get('http://localhost:3000/');
    });

    it('should have a title', function () {
        asgardPage.validateTitle();
    });

    it('should have Gateway link in left menu', function () {
        asgardPage.validateGatewayMenuName();
    });

    it('should have backgroud color #367fa9', function () {
        asgardPage.validateLeftBarStyle();
    });

    it('should have shown ten gateways', function () {
        asgardPage.validateGatewaysAcount(10);
    });

    it('should have first gateways 1 SAP Tres', function () {
        asgardPage.validateGatewayName(0, '1 SAP Tres');
    });

    it('should have first ZAP 2 gateway when use sort by name', function () {
        asgardPage.clikInOrderByName();
        asgardPage.validateGatewayName(0, 'ZAP 2');
    });

    it('should have first 1 SAP Tres gateways when use two times sort by name', function () {
        asgardPage.clikInOrderByName();
        asgardPage.clikInOrderByName();
        asgardPage.validateGatewayName(0, '1 SAP Tres');
    });

    it('should have obtain two elements when filter by Oracle', function () {
        asgardPage.writeInSearchBar('Oracle');

        asgardPage.validateGatewaysAcount(2);
        asgardPage.validateGatewayName(0, 'Oracle');
        asgardPage.validateGatewayName(1, 'Other Oracle Gateway');
    });

    it('Create a new gateway', function () {
        asgardPage.clickInCreate();
        newGatewayPage.create();
        asgardPage.validateGatewaysAcount(11);
    });
});