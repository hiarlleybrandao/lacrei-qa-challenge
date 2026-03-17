# Desafio Técnico QA - Lacrei Saúde ⚕️

Este repositório contém a execução do desafio técnico de Quality Assurance para a **Lacrei Saúde**. O projeto abrange desde a estratégia de testes manuais e documentação de bugs até a implementação de uma suíte de automação E2E com integração contínua.

[![Execução de Testes Cypress](https://github.com/hiarlleybrandao/lacrei-qa-challenge/actions/workflows/main.yml/badge.svg)](https://github.com/hiarlleybrandao/lacrei-qa-challenge/actions/workflows/main.yml)

---

# 🤖 Automação de Testes (E2E)

O projeto conta com uma suíte de testes automatizados para o fluxo crítico de cadastro, utilizando as melhores práticas de mercado para garantir estabilidade e rapidez no feedback.

- **Ferramenta:** Cypress 13+
- **Linguagem:** JavaScript
- **Padronização:** Gherkin (BDD) via Cucumber
- **CI/CD:** GitHub Actions (Execução automática a cada push/pull request)

### Diferenciais da Automação:
* **Resiliência (Hydration Handling):** Implementada lógica para ignorar exceções conhecidas de hidratação do React (`Minified React error #418/423`), permitindo que os testes prossigam mesmo com instabilidades na versão de staging.
* **Seletores Estáveis:** Priorização de atributos funcionais para evitar quebras por mudanças de CSS dinâmico.
* **Idempotência:** Configuração de geração de dados únicos para permitir múltiplas execuções sem conflito de e-mails duplicados.

### 🚀 Como rodar a automação localmente
1. **Clone o repositório:** `git clone https://github.com/hiarlleybrandao/lacrei-qa-challenge.git`
2. **Instale as dependências:** `npm install`
3. **Abra o Cypress:** `npx cypress open` ou via terminal: `npx cypress run`

---

# 📋 Estratégia e Escopo dos Testes

Os testes validaram os seguintes fluxos principais:
- Cadastro de usuário (Manual e Automatizado) ✅
- Busca de profissionais de saúde ✅
- Recuperação de senha ✅
- Validação de campos obrigatórios e inconsistentes ✅

### Tipos de Teste Aplicados:
- Testes Funcionais, Exploratórios, Negativos e de Regressão.

---

# 📊 Registros e Auditorias Especializadas

### ⚡ Teste de Desempenho (JMeter)
- **Cenário:** 30 usuários simultâneos no endpoint de cadastro.
- **Resultado:** Taxa de erro de **0,00%** e tempo médio de resposta de **209ms**.
- **Conclusão:** Ambiente demonstra robustez e alta performance sob carga moderada.

### ♿ Teste de Acessibilidade (Lighthouse & NVDA)
- **Score Lighthouse:** 96/100.
- **Pontos de Atenção:** Identificada falha na operabilidade via teclado (Enter/Espaço) e falta de `aria-live` para notificações de erro, impactando usuários de leitores de tela.

### 📱 Teste de Responsividade
- **Mobile & Desktop:** Layout aprovado e adaptável em resoluções de 320px a 1440px.

---

# 🐞 Gestão de Defeitos (Issues)

As falhas críticas identificadas foram registradas como **Issues** neste repositório para facilitar o rastreio e correção.

| ID | Título do Bug | Severidade | Status |
| :--- | :--- | :--- | :--- |
| **BUG-001** | Botão de submissão não responde à tecla "Enter" | **Crítica** | 🔴 Aberto |
| **BUG-002** | Tecla "Espaço" executa scroll em vez de ativar botões | **Alta** | 🔴 Aberto |
| **BUG-003** | Erros de validação não anunciados (Aria-live) | **Crítica** | 🔴 Aberto |

> **[Visualize os detalhes das Issues aqui](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues)**

---

# 📂 Estrutura do Repositório

```text
lacrei-qa-challenge
├── .github/workflows  → Pipeline de CI/CD (GitHub Actions)
├── cypress/           → Testes automatizados (Features e Steps)
├── test-cases/        → Documentação dos cenários manuais
├── bug-reports/       → Detalhamento de bugs encontrados
├── evidencias/        → Prints e vídeos das execuções
└── README.md          → Documentação principal
```

---

# 🔗 Links Importantes

- **Documentação Detalhada (Notion):** [Acessar Notion](https://www.notion.so/Desafio-T-cnico-Lacrei-Sa-de-31ed978c3bea80ccaac1d4514def8d93?source=copy_link)
- **URL do Sistema:** [Lacrei Saúde - Staging](https://) // Nesse momento irei deixar o link indisponível. ;)

---

Autor,
Hiarlley Brandão. | Quality Assurance Engineer.
