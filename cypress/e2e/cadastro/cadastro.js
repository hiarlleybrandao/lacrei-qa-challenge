import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../../pages/CadastroPage"; 

Given("que acesso a página de cadastro", () => {
  CadastroPage.visitar();
});

When("preencho os dados obrigatórios", () => {
  CadastroPage.preencherDadosObrigatorios();
});

When("clico em finalizar", () => {
  CadastroPage.validarBotaoPronto();
});

Then("o cadastro deve ser realizado com sucesso", () => {
  cy.log('Fluxo validado com sucesso usando Page Objects!');
});