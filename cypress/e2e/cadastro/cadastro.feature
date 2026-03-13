Feature: Cadastro de Paciente
  Scenario: Cadastro com sucesso
    Given que acesso a página de cadastro
    When preencho os dados obrigatórios
    And clico em finalizar
    Then o cadastro deve ser realizado com sucesso