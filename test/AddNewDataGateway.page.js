browser.params.fixtures.AddNewDataGatewayPage = function () {
    var map = new browser.params.fixtures.AddNewDataGatewayPageMap();

    this.create = function () {
        map.getName().sendKeys('New gateway');
        map.getDescription().sendKeys('The description for my test');
        map.getUsername().sendKeys('isalepb');
        map.getPassword().sendKeys('abc123');
        map.getConfirmPassword().sendKeys('abc123');
        map.getSaveButton().click();
    };
};