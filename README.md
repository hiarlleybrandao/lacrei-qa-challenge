# Desafio Técnico QA - Lacrei Saúde

Este repositório contém a execução do desafio técnico de Quality Assurance da plataforma Lacrei Saúde.

O objetivo foi validar funcionalidades principais da aplicação, documentar casos de teste e registrar evidências da execução.

---

# Escopo dos Testes

Os testes foram realizados nos seguintes fluxos da aplicação:

- Cadastro de usuário
- Busca de profissionais de saúde
- Recuperação de senha
- Validação de campos obrigatórios
- Validação de dados inconsistentes

---

# Tipos de Teste Realizados

Durante o desafio foram aplicados:

- Testes funcionais
- Testes exploratórios
- Testes de validação de campos
- Testes negativos

---

# Ambiente de Testes

URL do sistema:

https://paciente-staging.lacreisaude.com.br

Configuração utilizada:

- Navegador: Google Chrome
- Sistema Operacional: Windows
- Dispositivo: Desktop

---

# Estrutura do Repositório

lacrei-qa-challenge

test-cases → Casos de teste
bug-reports → Registro de bugs
evidencias → Evidências da execução
README.md → Documentação do desafio


---

# Casos de Teste

Foram documentados os seguintes casos de teste:

CT-001 – Cadastro de novo usuário  
CT-002 – Buscar profissional de saúde  
CT-003 – Recuperação de senha  
CT-004 – Cadastro com e-mail já cadastrado  
CT-005 – Cadastro com senhas diferentes  
CT-006 – Cadastro sem e-mail e sem senha

Os detalhes de cada teste estão disponíveis na pasta **test-cases**.

---

# Execução dos Testes

Os testes foram executados manualmente seguindo os cenários documentados.

Para cada teste foram registrados:

- Pré-condições
- Passos do cenário
- Resultado esperado
- Resultado Obtido
- Evidências

---

# Registro de Bugs

Os bugs encontrados durante os testes foram documentados na pasta:

bug-reports

Cada bug contém:

- descrição
- passos para reprodução
- resultado esperado
- resultado obtido
- evidência

---

# Evidências

As evidências da execução dos testes podem ser encontradas na pasta:

evidencias

---

# Checklist de Segurança

Durante os testes foram analisados:

- validação de campos obrigatórios
- validação de e-mail duplicado
- validação de senha
- fluxo de recuperação de senha
- autenticação de usuário

---

# Possível Automação de Testes

Como evolução futura, os testes poderiam ser automatizados utilizando ferramentas como:

- Cypress
- Playwright
- Selenium

---

# Autor

Projeto desenvolvido como prática de Quality Assurance.
