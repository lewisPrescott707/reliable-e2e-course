describe('Learning platform', () => {
    const url = '/courses'
    before(() => {
        cy.task('getStub', url).then((data) => {
            console.log(data)
            cy.intercept(`http://localhost:4000${url}`, (req) => {
                req.reply(data)
            }).as('courses')
        })
    })

    it('List courses', () => {
        cy.visit(url)
        cy.wait('@courses')
        cy.get('[data-cy="name"]').should('have.text', 'end-to-end')
    })
})
