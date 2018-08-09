// PROJECT INFO: After partial development, it was determined that due to the inconsistencies of the website design that it wasn't a good candidate for automation for borrowing, accessing, and returning a resource.


// mainPage = {}

// const listOfBooks = [
//     // books that are unlikely to be checked out
//     "Noisy Nora",
//     "My Brother's Keeper",
//     "Who Moved My Cheese?",
//     "The Chocolate Touch",
//     "My Tooth is Loose!",
//     "If You Give a Pig a Party",

// ]

// //function to checkout and return books

// let checkoutAndReturn = (pageObject, listOfBooks) => {
//     let searchObject = pageObject
//     let found = false
//     pageObject.api.perform((pageObject, done) => {
//         listOfBooks.forEach(book => {
//             pageObject.perform((finished) => {
//                 if (!found) {
//                     searchObject
//                         .clearValue('@searchInput')
//                         .setValue('@searchInput', book)
//                         .click('@searchBtn')
//                         // click from resulting list
//                         .waitForElementVisible('@borrowBtn', 10000, false, (result) => {
//                             if (result.value) {
//                                 searchObject.getText('@borrowBtn', function (result) {
//                                     if (result.value === 'Borrow') {
//                                         found = true
//                                         searchObject
//                                             .click('@borrowBtn')
//                                             .waitForElementVisible('@backToDetails', 5000)
//                                             .click('@backToDetails')
//                                             // go to loans, confirm book, return book
//                                             .waitForElementVisible('@archiveLogo', 5000)
//                                             .click('@myBooksBtn')
//                                             .click('@myLoans')
//                                             .verify.containsText('@myLoansTitle', book)
//                                             // return & verify return
//                                             .click('@returnBook')
//                                             .waitForElementVisible('@archiveLogo', 5000)
//                                             .click('@myBooksBtn')
//                                             .click('@myLoans')
//                                             .verify.containsText('@noBooks', 'You\'ve not checked out any books at this moment.')
//                                     }
//                                 })
//                             }
//                             else {
//                                 searchObject
//                                     .waitForElementVisible('@readBtn', 10000, false, (result) => {
//                                         if (result.value) {
//                                             searchObject.getText('@readBtn', function (result) {
//                                                 if (result.value === 'Read') {
//                                                     found = true
//                                                     searchObject
//                                                         .click('@readBtn')
//                                                         .waitForElementVisible('@backToDetails', 5000)
//                                                         .click('@backToDetails')
//                                                         // go to loans, confirm book, return book
//                                                         .waitForElementVisible('@myBooksBtn', 5000)
//                                                         .click('@myBooksBtn')
//                                                         .click('@myLoans')
//                                                         .assert.containsText('@myLoansTitle', book)
//                                                         // return & verify return
//                                                         .click('@returnBook')
//                                                         .waitForElementVisible('@myBooksBtn', 5000)
//                                                         .click('@myBooksBtn')
//                                                         .click('@myLoans')
//                                                         .assert.containsText('@noBooks', 'You\'ve not checked out any books at this moment.')
//                                                 }
//                                             })
//                                         }
//                                     })

//                             }
//                             console.log(`On ${book} and found = ${found}`)
//                             finished()
//                         })

//                     done()
//                 }})
//         });
//     })
// }

// // loop that runs through the list of books until one that can be checked out is found

// module.exports = {
//             beforeEach: browser => {
//                 mainPage = browser.page.OLPageObjects()
//                 mainPage.navigate()
//             },

//             after: browser => {
//                 browser.end()
//             },

//             //Login & Logout of Account
//             'Create Login Profile': browser => {
//                 mainPage
//                     .click('@logIn')
//                     .waitForElementVisible('@logInButton', 7000)
//                     .setValue('@logInEmail', 'tananzajoan@yahoo.com')
//                     .setValue('@logInPassword', 'password')
//                     .click('@logInButton')
//                     .waitForElementVisible('@olLogo', 7000)
//             },
//             'Checkout And Return': browser => {
//                 checkoutAndReturn(mainPage, listOfBooks)
//             }

//         }