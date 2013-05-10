/*
 * File: app/view/pnlLoginForm.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SkratchApp.view.pnlLoginForm', {
    extend: 'Ext.Panel',
    id: 'pnlLoginForm',
    alias: 'widget.login',
    config: {
        style: 'background-color:#e74c3c;',
        styleHtmlContent: true,
        items: [
            {
                xtype: 'image',
                centered: true,
                height: 47,
                html: '<p style="text-align:center;"><img src="resources/img/skratch-landscape.png" /></p>',
                id: 'imgLogoLogin',
                left: 'auto',
                right: 'auto',
                style: 'margin:0px auto; display:block;',
                top: '50px',
                width: '100%',
                src: 'resources/img/skratch-landscape.png'
            },
            {
                xtype: 'emailfield',
                style: 'margin-right:5px; margin-left:5px;',
                top: '150px',
                width: '97%',
                label: '',
                placeHolder: 'email@example.com'
            },
            {
                xtype: 'passwordfield',
                style: 'margin:0px 5px;',
                top: '200px',
                width: '97%',
                label: '',
                placeHolder: 'Password'
            },
            {
                xtype: 'button',
                centered: false,
                id: 'btnSignIn',
                action: 'login',
                margin: '25 auto 0 auto',
                top: '270px',
                ui: 'action',
                width: '97%',
                text: 'Sign In'
            }
        ]
    }

});