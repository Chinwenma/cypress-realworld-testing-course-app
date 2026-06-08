
// describe('Subscribe Feature Test', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:3000/')
//     })
//     it('allows users to subscribe to the newsletter', () => {
//         cy.getByData("email-input")
//     })
// })
describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it.only("allows users to subscribe to the email list", () => {
    cy.get('[data-test="email-input"]')
  })
})
