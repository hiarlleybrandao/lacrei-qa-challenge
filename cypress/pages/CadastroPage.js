class CadastroPage {
  // Centralizamos os seletores aqui. Se o site mudar, você só mexe aqui.
  elements = {
    nomeInput: () => cy.get('input[placeholder*="nome civil"]'),
    sobrenomeInput: () => cy.get('input[placeholder*="sobrenome"]'),
    emailInput: () => cy.get('input[name="email"]'),
    confirmarEmailInput: () => cy.get('input[placeholder*="Confirme seu e-mail"]'),
    senhaInput: () => cy.get('input[type="password"]').first(),
    confirmarSenhaInput: () => cy.get('input[type="password"]').last(),
    checkboxes: () => cy.get('input[type="checkbox"]'),
    btnCadastrar: () => cy.contains('button', 'Cadastrar')
  }

  visitar() {
    cy.visit("/"); 
    cy.contains('button', 'Criar conta', { timeout: 20000 }).should('be.visible').click({ force: true });
  }

  preencherDadosObrigatorios() {
    const emailUnico = `qa.${Date.now()}@exemplo.com`;

    // Usamos o .should('be.visible') antes de digitar para evitar o erro de "não encontrado"
    this.elements.nomeInput().should('be.visible').type('Francisco Hiarlley');
    this.elements.sobrenomeInput().type('Brandão');
    this.elements.emailInput().type(emailUnico);
    this.elements.confirmarEmailInput().type(emailUnico);
    this.elements.senhaInput().type('Senha@123456');
    this.elements.confirmarSenhaInput().type('Senha@123456');

    // Seleciona as checkboxes com segurança
    this.elements.checkboxes().first().check({ force: true });
    this.elements.checkboxes().last().check({ force: true });
  }

  validarBotaoPronto() {
    this.elements.btnCadastrar().should('not.be.disabled');
  }
}

export default new CadastroPage();