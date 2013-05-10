Ext.define("SkratchApp.controller.LoginController", {
extend: "Ext.app.Controller",
views: ['LoginView'],

config: {
    refs: {
        loginForm: "#pnlLoginForm"
    },
    control: {
        'button[action=login]': {
            tap: "authenticateUser"
        }
    }
},

authenticateUser: function (button) {

    this.getLoginForm().submit({
        url: 'login/authenticate',
        method: 'POST',
        success: function (form, result) {
            debugger; //This block of code is not executing even after JSON response
            var jsonoutput = Ext.decode(result);  // json parsing
            Ext.MessageBox.alert('Error', "Success");

        },
        failure: function (form, result) {//This block of code is not executing even after JSON response
            Ext.MessageBox.alert('Error', "Invalid username/password");
        }

    });
}

});