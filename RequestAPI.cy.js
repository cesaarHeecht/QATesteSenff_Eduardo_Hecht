describe('Testes API - Restful Booker', () => {

  it('Fluxo completo correto', () => {

   
    cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
      username: 'admin',
      password: 'password123'
    }).then((authRes) => {

      const token = authRes.body.token

     
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
        firstname: 'Eduardo',
        lastname: 'Teste',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-01-01',
          checkout: '2024-01-10'
        },
        additionalneeds: 'Breakfast'
      }).then((createRes) => {

        const bookingId = createRes.body.bookingid

        expect(createRes.status).to.eq(200)
        expect(bookingId).to.exist

        
        cy.request('GET', `https://restful-booker.herokuapp.com/booking/${bookingId}`)
          .then((getRes) => {
            expect(getRes.status).to.eq(200)
            expect(getRes.body.firstname).to.eq('Eduardo')
          })

    
        cy.request({
          method: 'PUT',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          headers: {
            Cookie: `token=${token}`
          },
          body: {
            firstname: 'Eduardo',
            lastname: 'PUT',
            totalprice: 200,
            depositpaid: false,
            bookingdates: {
              checkin: '2026-03-30',
              checkout: '2026-03-31'
            },
            additionalneeds: 'Lunch'
          }
        }).then((updateRes) => {
          expect(updateRes.status).to.eq(200)
          expect(updateRes.body.firstname).to.eq('Eduardo')
        })

    
        /*cy.request({
          method: 'DELETE',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          headers: {
            Cookie: `token=${token}`
          }
        }).then((deleteRes) => {
          expect(deleteRes.status).to.eq(201)
        })*/

      })
    })

  })

})