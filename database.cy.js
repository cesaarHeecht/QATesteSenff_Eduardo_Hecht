describe('Testes Banco de Dados', () => {

  it('Fluxo completo banco', () => {

    
    cy.task('queryDb', `
      INSERT INTO test_client (test_users, test_mails, test_address, age)
      VALUES 
      ('Eduardo', 'edu@email.com', 'São Paulo', 25),
      ('Maria', 'maria@email.com', 'Belo Horizonte', 30),
      ('João', 'joao@email.com', 'Belo Horizonte', 40)
    `)

    
    cy.task('queryDb', `
      SELECT * FROM test_client 
      WHERE test_address LIKE '%São Paulo%'
    `).then((res) => {
      expect(res.length).to.be.greaterThan(0)
    })

    
    cy.task('queryDb', `
      UPDATE test_client 
      SET test_mails = 'novo@email.com'
      WHERE test_users = 'Eduardo'
    `)

    
    cy.task('queryDb', `
      SELECT test_mails FROM test_client 
      WHERE test_users = 'Eduardo'
    `).then((res) => {
      expect(res[0].test_mails).to.eq('novo@email.com')
    })

    
    cy.task('queryDb', `
      SELECT AVG(age) AS media_idade
      FROM test_client
      WHERE test_address LIKE '%Belo Horizonte%'
    `).then((res) => {
      expect(res[0].media_idade).to.exist
      cy.log('Média de idade BH: ' + res[0].media_idade)
    })

    
    cy.task('queryDb', `
      DELETE FROM test_client
      WHERE test_address IS NULL
        AND age > 75
    `)

  })

})