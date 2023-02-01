describe('Learning platform', () => {
    const url = '/courses'
    before(() => {
        // Add cy.task & cy.intercept here
    })

    it('List courses', () => {
        cy.visit(url)
        cy.wait('@courses')
        cy.get('[data-cy="name"]').should('have.text', 'end-to-end')
    })
})
