/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";

describe('Login Test', () => {

  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it('Login Succesful', () => {
    loginPage.visit()
    .fiilEmail("husnadskrntest@gmail.com")
    .fiilPassword("Deneme6767..hh")
    .clickLoginButton();
    homePage.controlLoginAccount("Hesabım");
  })

  it('Login Unsuccesful', () => {
    loginPage.visit()
    .fiilEmail("husnadskrntes2121t@gmail.com")
    .fiilPassword("Deneme6767..hh")
    .clickLoginButton()
    .errorMessageDisplayedControl();
  })

  it('Login InCorrectPassword', () => {
    loginPage.visit()
    .fiilEmail("husnadskrntest@gmail.com")
    .fiilPassword("6767..hh")
    .clickLoginButton()
    .errorMessageControl("E-posta adresiniz ve/veya şifreniz hatalı.")
  })

  it('Login MaxCharacterEmailControl', () => {
    loginPage.visit()
    .fiilEmail("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    .fiilPassword("Deneme6767..hh")
    .clickLoginButton()
    .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.")
  })

  it('Login RequiredControl', () => {
    loginPage.visit()
    // .fiilEmail(" ")
    // .fillPassword(" ")
    .clickLoginButton()
    .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.")
    .fiilEmail("husnadskrntest@gmail.com")
    .clickLoginButton()
    .errorMessageControl("Lütfen şifrenizi giriniz.")
    .fiilPassword("Deneme6767..hh")
    .clickLoginButton();
    homePage.controlLoginAccount("Hesabım");
})

  it('Login MaxCharacterPasswordControl', () => {
    loginPage.visit()
    .fiilEmail("husnadskrntest@gmail.com")
    .fiilPassword("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    .clickLoginButton()
    .errorMessageControl("E-posta adresiniz ve/veya şifreniz hatalı.")
  })
})
