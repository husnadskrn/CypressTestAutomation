class HomePage{
    
    controlLoginAccount(value){
        cy.get("[class='link account-user'] p").should('have.text', value);
    }
}

export default HomePage;