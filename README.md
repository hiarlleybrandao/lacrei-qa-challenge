# Desafio Técnico QA - Lacrei Saúde ⚕️

Este repositório contém a execução do desafio técnico de Quality Assurance para a **Lacrei Saúde**. O projeto abrange desde a estratégia de testes manuais e documentação de bugs até a implementação de uma suíte de automação E2E com integração contínua.

[![Execução de Testes Cypress](https://github.com/hiarlleybrandao/lacrei-qa-challenge/actions/workflows/main.yml/badge.svg)](https://github.com/hiarlleybrandao/lacrei-qa-challenge/actions/workflows/main.yml)

---

# 🛠️ Arquitetura e Estrutura da Automação

Para atender aos requisitos de escalabilidade e facilidade de manutenção sugeridos, a automação foi reestruturada utilizando padrões de projeto (Design Patterns) reconhecidos pela comunidade de QA.

### 🏗️ Padrões de Projeto Adotados

* **Page Object Model (POM):** Centralizamos o mapeamento de elementos e as ações das páginas na pasta `cypress/pages`. Isso garante que mudanças no layout do site exijam manutenção em um único local, protegendo a integridade dos testes.

* **Encapsulamento de Steps:** Os *Step Definitions* foram padronizados para serem genéricos e reutilizáveis entre diferentes arquivos `.feature`, reduzindo drasticamente a duplicidade de código.

* **Global Exception Handling:** Utilizamos o arquivo `support/e2e.js` para gerenciar exceções globais do React, garantindo resiliência contra erros de hidratação e instabilidades do ambiente de staging.

### 📁 Estrutura de Pastas

```text
lacrei-qa-challenge

├── cypress/
│   ├── e2e/
│   │   ├── features/          → Cenários de negócio em Gherkin (.feature)
│   │   └── step_definitions/  → Implementação dos passos dos testes (.js)
│   ├── pages/                 → Camada de Page Objects (POM)
│   ├── support/               → Comandos customizados e hooks globais (e2e.js)
│   └── fixtures/              → Massas de dados e mocks (JSON)
├── .github/workflows          → Pipeline de CI/CD (GitHub Actions)
└── README.md                  → Documentação técnica principal
```

---

# 🤖 Automação de Testes (E2E)

O projeto conta com uma suíte de testes automatizados para o fluxo crítico de cadastro, utilizando as melhores práticas de mercado para garantir estabilidade e rapidez no feedback.

- **Ferramenta:** Cypress 13+

- **Linguagem:** JavaScript

- **Padronização:** Gherkin (BDD) via Cucumber

- **CI/CD:** GitHub Actions (Execução automática a cada push/pull request)

---

# 📋 Estratégia e Cobertura de Testes

A cobertura foi ampliada para incluir o "caminho feliz", validações negativas, dados inválidos e fluxos de exceção, garantindo a robustez da jornada da pessoa usuária.

| ID | Cenário de Teste | Categoria | Status |
| :--- | :--- | :--- | :--- |
| **CT-001** | Cadastro com dados válidos | Caminho Feliz | ✅ Passou |
| **CT-008** | E-mail em formato inválido | Negativo | ✅ Passou |
| **CT-009** | Senha fora dos critérios de segurança | Negativo | ✅ Passou |
| **CT-010** | Nome/Sobrenome com caracteres inválidos | Dados Inválidos | ✅ Passou |
| **CT-011** | Busca por profissional sem resultados | Alternativo | ✅ Passou |
| **CT-013** | Acesso direto a URLs restritas (Privacidade) | Segurança | ✅ Passou |

---

# 📊 Registros e Auditorias Especializadas

### ⚡ Teste de Desempenho (JMeter)

- **Cenário:** **30 usuários simultâneos** no endpoint de cadastro.

- **Resultado:** Taxa de erro de **0,00%** e tempo médio de resposta de **209ms**.

- **Conclusão:** Ambiente demonstra robustez e alta performance sob carga moderada.

### ♿ Teste de Acessibilidade (Lighthouse & NVDA)

- **Score Lighthouse:** **96/100.**

- **Pontos de Atenção:** Identificada falha na operabilidade via teclado (Enter/Espaço) e falta de `aria-live` para notificações de erro, **impactando usuários de leitores de tela.**

### 📱 Teste de Responsividade
- **Mobile & Desktop:** Layout aprovado e adaptável em resoluções de 320px a 1440px.

---

# 🐞 Gestão de Defeitos (Issues)

As falhas identificadas foram registradas e gerenciadas via **GitHub Issues**. Realizei o reteste dos itens corrigidos para garantir a integridade das correções antes do fechamento.

| ID | Título do Bug | Severidade | Status |
| :--- | :--- | :--- | :--- |
| **BUG-005** | Pesquisa por texto não retorna resultados ao pressionar "Enter" | **Crítico** | 🔴 Aberto |
| **BUG-004** | [Mobile] Borda branca aparece na lateral da tela ao acessar perfil | **Baixa** | 🔴 Aberto |
| **BUG-003** | Avatar padrão do médico exibido incorretamente | **Média** | 🔴 Aberto |
| **BUG-002** | [Mobile] Botão "Perfil" permanece flutuando após navegação | **Média** | 🔴 Aberto |
| **BUG-001** | Mensagens de erro de validação não são anunciadas pelo NVDA | **Crítico** | 🔴 Aberto |
| **FIX-001** | Botão de submissão não responde à tecla "Enter" | **Crítico** | ✅ Fechado (Retestado) |
| **FIX-002** | Tecla "Espaço" executa scroll (Page Down) em vez de ativar botões | **Alta** | ✅ Fechado (Retestado) |

> **[Visualize o board completo de Issues aqui](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues)**

---

# 🚀 Como rodar a automação localmente

- **Clone o repositório:** git clone https://github.com/hiarlleybrandao/lacrei-qa-challenge.git
- **Instale as dependências:** npm install

- **Abra o Cypress (Interface):** npx cypress open
- **Execução Headless (Terminal):** npx cypress run

# 🔗 Links Importantes

- **Documentação Detalhada (Notion):** [Acessar Notion](https://www.notion.so/Desafio-T-cnico-Lacrei-Sa-de-31ed978c3bea80ccaac1d4514def8d93?source=copy_link)
- **URL do Sistema:** [Lacrei Saúde - Staging](https://paciente-staging.lacreisaude.com.br)
- **LinkedIn:** [Conectar com Hiarlley](https://www.linkedin.com/in/hiarlleybrandao)

---

Autor,
Hiarlley Brandão. | Quality Assurance Engineer.
