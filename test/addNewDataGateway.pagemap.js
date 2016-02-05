browser.params.fixtures.AddNewDataGatewayPageMap = function () {
    this.getName = function () {
        return element(by.id('name'));
    };

    this.getDescription = function () {
        return element(by.id('description'));
    };

    this.getUsername = function () {
        return element(by.id('username'));
    };

    this.getPassword = function () {
        return element(by.id('password'));
    };

    this.getConfirmPassword = function () {
        return element(by.id('repeat_password'));
    };

    this.getSaveButton = function () {
        return element(by.id('save-gateway'));
    };
};
