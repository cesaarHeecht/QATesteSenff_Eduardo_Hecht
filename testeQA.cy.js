describe ('Teste de QA Junior', () =>{

    //Cenário 1: Criar Conta de Usuário 
    it('Acessar site', () =>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').should('have.text', 'Sign up').click()
        cy.get('#sign-username').type('TesteEdu')
        cy.get('#sign-password').type('123456')
        cy.contains('button', 'Sign up').click()
    })

    //Cenário 2: Testar Login - Caminho Positivo e Negativo 
    it('Testar login - Caminho Negativo', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    cy.get('#login2').click()
    cy.get('#logInModal').should('be.visible')

    cy.get('#loginusername').type('EduTeste1')
    cy.get('#loginpassword').type('123456')
    cy.on('window:alert', (text) => {
        expect(text).to.contains('User does not exist.')
    })

    cy.contains('button', 'Log in').click()
})

  it('Testar login - Caminho Positivo', () => {

    const usuario = 'TesteEdu'
    const senha = '123456'

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').type(usuario)
    cy.get('#loginpassword').type(senha)
    cy.contains('button', 'Log in').click()
    cy.get('#nameofuser.nav-link', { timeout: 10000 })
})

it('Efetuar compra de produto', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Samsung galaxy s6').should('be.visible')
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Product added')
    })
    cy.contains('Add to cart').click()
    cy.get('#cartur').click()
    cy.contains('Samsung galaxy s6').should('be.visible')
    cy.contains('Place Order').click()
    cy.get('#name').type('Eduardo')
    cy.get('#country').type('Brasil')
    cy.get('#city').type('Curitiba')
    cy.get('#card').type('1234123412341234')
    cy.get('#month').type('03')
    cy.get('#year').type('2026')
    cy.contains('button', 'Purchase').click()
    cy.contains('OK').click()
})
})