describe('Testing form', () => {
    beforeEach(() => {
        cy.visit("/pizza")
    })
    it("fills out name", () => {

        const name = 'Brandon';
        const instruct = 'Gluten Free Crust'

        cy.get('[data-cy=submitButton]').should('be.disabled')
        
        cy.get('[for="name"] > input').type(name).should('have.value', name)

        cy.get('select').select('Large').should('have.value', 'Large')

        cy.get('[data-cy=instructionsBox]').type(instruct).should('have.value', instruct)

        cy.get('[for="pepperoni"] > input').check().should("be.checked")

        cy.get(':nth-child(6) > input').check().should('be.checked')

        cy.get('[data-cy=submitButton]').should('be.not.disabled')
    })
})