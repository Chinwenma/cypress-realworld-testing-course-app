describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('my first test', () => {
    cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress')
  })
    it('1st feature test', () => {
    cy.get('dt') .eq(0) .contains('4 Courses')
})
   it('2nd feature test', () => {
    cy.get('dt') .eq(1) .contains('25+ Lessons')
})
it.only('3rd feature test', () => {
    cy.get('dt') .eq(2) .contains('Free and Open Source')  
})
})