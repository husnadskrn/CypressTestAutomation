const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: "8afvwx",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportWidth: 1280,   
    viewportHeight: 800, 
  },
});
