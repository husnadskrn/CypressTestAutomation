class LoginPage{
    
    visit(){
        cy.visit("https://www.trendyol.com/giris?cb=%2F");
        return this;
    }

    fiilEmail(value){
        cy.get("[id='login-email']").type(value);
        return this;
    }

    fiilPassword(value){
        cy.get("[id='login-password-input']").type(value);
        return this;
    }

    clickLoginButton(){
        cy.get("button[type='submit']").click();
        return this;
    }

    errorMessageDisplayedControl(){
        cy.get("[id='error-box-wrapper']").should('be.visible');
        return this;
    }
    
    errorMessageControl(value){
        cy.get("[class='message']").should('have.text', value);
        return this;
    }
}

export default LoginPage;