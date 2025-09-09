/// <reference types="cypress" />

describe('Métodos de búsqueda', () => {

    it('Utilizar busquedas', () => {
        cy.visit('/pages/iot-dashboard')

        // Buscar únicamente selectores
        cy.get('button')

        // Buscar selectores y texto
        cy.contains('button', 'Light')

        // Apartir de GET o CONTAINS, permite buscar selectores
        cy.get('button').find('span')

    })
})

describe('Utilizar los diferentes selectores', () => {
    // El ".only" ejecuta unicamente el IT o DESCRIBE que lo tenga
    it.only('Utilizar diferentes selectores', () => {
        cy.visit('/pages/forms/layouts')

        // Localizar elementos a través de diferentes selectores
        // ID
        cy.get('#inputEmail3')

        // Clase
        cy.get('.status-warning')

        // Nombre de la etiqueta
        cy.get('button')

        // Atributos
        cy.get('[status]')

        // Atgributos con valor
        cy.get('[status="danger"]')

        // Combinación
        // SIMEPRE SIN ESPACIOS AL COMBINAR SELECTORES
        cy.get('#inputEmail3.input-full-width[fullwidth][placeholder="Email"]')
    })
})