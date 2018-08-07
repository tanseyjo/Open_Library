mainPage = {}

module.exports = {
    beforeEach: browser => {
        mainPage = browser.page.OLPageObject()
        mainPage.navigate()
    },

    after: browser => {
        browser.end()
    },
   
    //Login & Logout of Account
    'Create Login Profile': browser => {
        mainPage
            .click('@signup')  


    },

}