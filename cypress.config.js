const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: "id6ayb",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportWidth: 1280,   
    viewportHeight: 800, 
  },
});
