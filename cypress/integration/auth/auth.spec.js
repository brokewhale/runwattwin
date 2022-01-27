/// <reference types="cypress" />

describe('check-homepage', () => {
  beforeEach(() => {
    // cy.visit(`${process.env.NEXTAUTH_URL}`)
    cy.visit('http://localhost:3000/')
  })

  it('displays begin button', () => {
    cy.get('#beginBtn').contains('Begin').click()

    // cy.get('div').contains('Begin')
  })
})
