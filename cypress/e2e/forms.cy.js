describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('juansepinerosh@gmail.com')
        cy.contains(/Successfully subbed: juansepinerosh@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: juansepinerosh@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: juansepinerosh@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('juansepinerosh@gmail.co')
        cy.contains(/invalid email: juansepinerosh@gmail.co!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: juansepinerosh@gmail.co!/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: juansepinerosh@gmail.co!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')

    })
})