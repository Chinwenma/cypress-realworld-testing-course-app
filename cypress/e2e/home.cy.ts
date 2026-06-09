// describe('Home Page', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000')
//   })
//   it('my first test', () => {
//     cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress')
//   })
//     it('1st feature test', () => {
//     cy.get('dt') .eq(0) .contains('4 Courses')
// })
//    it('2nd feature test', () => {
//     cy.get('dt') .eq(1) .contains('25+ Lessons')
// })
// it.only('3rd feature test', () => {
//     cy.get('dt') .eq(2) .contains('Free and Open Source')  
// })
// })
// 
describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct text", () => {
    cy.getByData("hero-heading").contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})
