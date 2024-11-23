const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Adjust to your frontend's local URL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Look for test files
  },
});

