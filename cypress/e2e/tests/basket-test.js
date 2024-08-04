/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import MainPage from "../pages/main-page";
import ProductListPage from "../pages/product-list-page";

describe('Basket Test', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const mainPage = new MainPage();
    const productListPage = new ProductListPage();

    it.only('Add To Product', () => {
        loginPage.visit()
            .fiilEmail("husnadskrntest@gmail.com")
            .fiilPassword("Deneme6767..hh")
            .clickLoginButton();
        homePage.controlLoginAccount("Hesabım");
        mainPage.fiilSearch("Laptop")
        mainPage.fillSearchAndPressEnter("Telefon");
        productListPage
            .firstProductClick()
            .clickOverlay();
    })
})