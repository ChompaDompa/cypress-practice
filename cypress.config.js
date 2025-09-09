const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    baseUrl: 'https://playground.bondaracademy.com/',
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});

/*
npx cypress open                          Ejecutar desde navegador
npx cypress run                           EJecutar desde consola
--spec "cypress\e2e\test1.cy.js"          Ejecutar algun test en especifico
--headed                                  Ejecutando desde navegador, ver lo que hace
--browser chrome                          Ejecutar test en algun navegador en especifico
*/