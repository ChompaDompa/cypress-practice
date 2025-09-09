/// <reference types="cypress" />


describe('Gerarquía de elementos', () => {
    it('Elementos hijos', () => {
        cy.visit('pages/forms/layouts')

        cy.contains('nb-card', 'Horizontal form')
            .find('[class="form-group row"]')
            .contains('span', 'Remember me')
    })

    it('Elementos padre', () => {
        cy.visit('pages/forms/layouts')

        cy.contains('nb-card', 'Horizontal form').contains('span', 'Remember me')
            .parents('nb-card')
            .find('button')
    })
})

describe('Reutilizar elementos', () => {
    it('Método as()', () => {
        cy.visit('pages/forms/layouts')

        // No es optimo
        // cy.contains('nb-card', 'Horizontal form').find('[placeholder="Email"]').type('123')
        // cy.contains('nb-card', 'Horizontal form').find('[placeholder="Password"]').type('123')
        // cy.contains('nb-card', 'Horizontal form').contains('span', 'Remember me').click()

        // let selector = cy.contains('nb-card', 'Horizontal form');

        // selector.find('[placeholder="Email"]').type('123')
        // selector.find('[placeholder="Password"]').type('123')
        // selector.contains('span', 'Remember me').click()

        cy.contains('nb-card', 'Horizontal form').as('formuarioHorizontaslForm')

        cy.get('@formuarioHorizontaslForm').find('[placeholder="Email"]').type('123')
        cy.get('@formuarioHorizontaslForm').find('[placeholder="Password"]').type('123')
        cy.get('@formuarioHorizontaslForm').contains('span', 'Remember me').click()
    })

    it.only('Método then()', () => {
        cy.visit('pages/forms/layouts')

        cy.contains('nb-card', 'Horizontal form').then(selector => {
            cy.wrap(selector).find('[placeholder="Email"]').type('123')
            cy.wrap(selector).find('[placeholder="Password"]').type('123')
            cy.wrap(selector).contains('span', 'Remember me').click()
        })
    })
})