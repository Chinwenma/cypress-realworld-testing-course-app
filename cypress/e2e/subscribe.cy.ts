
describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input") .eq(0) .type("tom@aol.com")
    cy.getByData("submit-button") .click()
    cy.getByData("success-message") .should("exist") .contains("tom@aol.com has been successfully subscribed")
  })
  it("shows an error message when the email is invalid", () => {
    cy.getByData("email-input") .eq(0) .type("inv")
    cy.getByData("submit-button") .click()
    cy.getByData("succes-message") .should("not.exist")
  })
  it.only("shows a message that an email already exists", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button") .click()
    cy.getByData("server-error-message") .should("exist") .contains("already exists. Please use a different email address.")
  })

})
