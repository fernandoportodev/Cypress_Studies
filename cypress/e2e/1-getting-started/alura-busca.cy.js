describe('alura busca cursos', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    }) 


it('buscar curso de QA', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('QA');
    cy.get('.header-barraBusca-form-submit').click();
    // cy.get(':nth-child(1) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('be.visible') - Não é uma boa prática dessa maneira
    // cy.get(':nth-child(1) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('have.text', 'Formação Carreira QA: processos e automação de testes') - Não é uma boa prática dessa maneira
    cy.get('h4.busca-resultado-nome').should('be.visible')
    cy.get('h4.busca-resultado-nome').should('contain', 'Formação Carreira QA: processos e automação de testes')
})

})