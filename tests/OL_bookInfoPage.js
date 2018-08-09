//This test checks the functionality of the Random Book option and checks the book's page for some common page components

mainPage = {}

module.exports = {
    beforeEach: browser => {
        mainPage = browser.page.OLPageObjects()
        mainPage.navigate()
        browser.maximizeWindow()
    },

    after: browser => {
        browser.end()
    },
   
    //Select & Review Random Book
    'Random Book': browser => {
        mainPage
            .click('@logIn')  
            .waitForElementVisible('@logInButton', 5000)
            .setValue('@logInEmail', 'tananzajoan@yahoo.com')
            .setValue('@logInPassword', 'password')
            .click('@logInButton')
            .waitForElementVisible('@olLogo', 5000)
            .click('@moreBtn')
            .waitForElementVisible('@randomBook', 5000)
            .click('@randomBook')
            .waitForElementVisible('@wantToRead', 5000)
            .waitForElementVisible('@cover', 5000)
            .waitForElementVisible('@workTitle', 5000)
            .waitForElementVisible('@author', 5000)
            .waitForElementVisible('@readOptionsBox', 5000)
            .waitForElementVisible('@idNumbers', 5000)
            .click('@userMenu')
            .click('@userLogOut')
    },

}