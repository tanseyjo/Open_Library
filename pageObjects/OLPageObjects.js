module.exports = {
    url: 'https://openlibrary.org/',
    elements: {

        hamburgerMenu : 'img[alt="additional options menu"]',
        logIn : { selector: '//a[text()="Log In"]', locateStrategy: 'xpath' },
        logInButton : 'input[title="Log In"]',
        logInEmail : 'input[id="username"]',
        logInPassword : 'input[id="password"]',
        userMenu : 'button[id="userToggle"]',
        userLogOut : 'form[name="logout"]',
        olLogo : 'img[alt="Open Library logo"]',
        searchInput : 'input[placeholder="Search"]',
        searchBtn : '.search-bar-submit',
        borrowBtn : {selector: '(//*[@id="borrow_ebook"])[1]', locateStrategy: 'xpath'},
        readBtn : {selector: '(//*[@id="read_ebook"])[1]', locateStrategy: 'xpath'},
        backToDetails : '.BRTitleLink',
        archiveLogo : '#archive-logo',
        myBooksBtn : 'img[alt="My Books"]',
        myLoans : { selector: '(//a[text()="My Loans"])[1]', locateStrategy: 'xpath' },
        myLoansTitle : { selector: '(//strong)[2]', locateStrategy: 'xpath' },
        returnBook : 'input[value="Return book"]',
        noBooks :  { selector: '(//em[text()="You\'ve not checked out any books at this moment."])', locateStrategy: 'xpath' },
        moreBtn : '.more-menu',
        randomBook : { selector: '(//a[text()="Random Book"])[2]', locateStrategy: 'xpath' },
        wantToRead : 'button[class="book-progress-btn want-to-read unactivated"]',
        cover : { selector: '(//*[@class="cover"])[1]', locateStrategy: 'xpath' },
        workTitle : 'h1[itemprop="name"]',
        author : 'a[itemprop="author"]',
        readOptionsBox : '#read-options',
        idNumbers : { selector: '(//h3[text()="ID Numbers"])', locateStrategy: 'xpath' },

        




        // 'loginHeading' : 'div[class="col-6-12 tab selected"]',
        // 'deck2' : { selector: '//label[text()="Deck 2"]', locateStrategy: 'xpath' },
        //'sam' : { selector: '(//li[@class="listText"])[text()="Sam Smith"]', locateStrategy: 'xpath' },




    }
}