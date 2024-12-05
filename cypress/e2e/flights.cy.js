describe('Flight Booking App', () => {
    it('loads the homepage and fetches flights', () => {
      cy.visit('/'); // Base URL is automatically prefixed from cypress.config.js
      cy.contains('Available Flights').should('be.visible');
    });
  });