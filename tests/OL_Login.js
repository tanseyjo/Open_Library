// This test checks that the user login/logout functionality

mainPage = {}

module.exports = {
    beforeEach: browser => {
        mainPage = browser.page.OLPageObjects()
        mainPage.navigate()
    },

    after: browser => {
        browser.end()
    },
   
    //Login & Logout of Account
    'User Login & Logout': browser => {
        mainPage
            .click('@logIn')  
            .waitForElementVisible('@logInButton', 5000)
            .setValue('@logInEmail', 'tananzajoan@yahoo.com')
            .setValue('@logInPassword', 'password')
            .click('@logInButton')
            .waitForElementVisible('@olLogo', 5000)
            .click('@userMenu')
            .click('@userLogOut')
    },

}