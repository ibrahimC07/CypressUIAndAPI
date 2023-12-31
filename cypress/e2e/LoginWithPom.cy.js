import Login from "../PageObjects/LoginPage.js"

describe('pom', () => {

    //General approach
    it('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    })

    //POM approach
    it('LoginTestPOM', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const ln = new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()

    })

    //POM with Fixures 
    it.only('LoginTestWithPOM & Fixure', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangehrm').then((data) => {
            const ln = new Login();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()

        })

    })

})
