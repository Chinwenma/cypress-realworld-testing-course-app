describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  context("hero-section", () => {
    it("my first test", () => {
      cy.getByData("hero-heading")
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })
    it("1st feature test", () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })
  context("Courses section", () => {
    it("Course:Testing Your First Next.js Application", () => {
      cy.getByData("course-0").should("exist").find("a").eq(3).click()
      cy.location("pathname") .should("eq" , "/testing-your-first-application")
    })
    it("Course:Testing Your First Next.js Application", () => {
      cy.getByData("course-1").should("exist").find("a") .contains("Get started").click()
      cy.location("pathname") .should("equal" , "/testing-foundations")
    })
     it.only("Course:Testing Your First Next.js Application", () => {
      cy.getByData("course-2").should("exist").find("a").contains("Get started").click()
      cy.location("pathname") .should("equal" , "/cypress-fundamentals")
    })
  })
})




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
