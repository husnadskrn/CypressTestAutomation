/// <reference types="cypress" />

describe('Login Test', () => {
      it('Login Successful', () => {
        cy.visit('https://www.netflix.com/login');
        cy.get("[id='onetrust-accept-btn-handler']").click();
        cy.get("[name='userLoginId']").type("husnadskrntest@gmail.com", { delay: 100 });
        cy.get("[data-uia='password-field']").type("deneme6767..hh");
        cy.get("[data-uia='login-submit-button']").click();
        cy.get("[id='signOut']").should('have.text', "Oturumu Kapat");
      })
      
      it('Login Unsuccesful', () => {
        cy.visit('https://www.netflix.com/login');
        cy.get("[id='onetrust-accept-btn-handler']").click();
        cy.get("[name='userLoginId']").type("husnadskrntest@gmail.com", { delay: 100 });
        cy.get("[data-uia='password-field']").type("6767..hh");
        cy.get("[data-uia='login-submit-button']").click();
        cy.get("[data-uia='error-message-container+header']").should('have.text', "Incorrect password for husnadskrntest@gmail.com");
      })
    })
