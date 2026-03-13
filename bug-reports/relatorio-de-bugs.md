# 🐛 Relatório de Bugs e Melhorias

Este documento centraliza todas as falhas identificadas durante o ciclo de testes (Desktop, Mobile e Acessibilidade), garantindo a rastreabilidade total entre o Notion e as Issues do GitHub.

---

## 🔍 Bugs Identificados (Rastreabilidade)

| ID | Categoria | Título do Bug | Impacto | Severidade | Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BUG-001** | **Acessibilidade** | Botão de submissão não responde à tecla "Enter" | 🔴 Crítico | Alta | [#1](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/1) |
| **BUG-002** | **UX** | Tecla "Espaço" executa scroll em vez de ativar botões | 🟡 Médio | Normal | [#2](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/2) |
| **BUG-003** | **Acessibilidade** | Mensagens de erro não anunciadas pelo NVDA | 🔴 Crítico | Alta | [#3](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/3) |
| **BUG-004** | **UX / Mobile** | Botão "Perfil" flutuando na tela após navegação | 🟠 Alto | Alta | [#4](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/4) |
| **BUG-005** | **Interface** | Avatar padrão do médico exibido incorretamente | 🔵 Baixo | Baixa | [#5](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/5) |
| **BUG-006** | **Interface / Mobile** | Borda branca lateral (Overflow de layout) | 🟡 Médio | Normal | [#6](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/6) |
| **BUG-007** | **Funcional / Acess.** | Busca não retorna resultados ao pressionar "Enter" | 🟠 Alto | Alta | [#7](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/7) |

---

## 📑 Glossário de Impacto

* 🔴 **Crítico:** Impede a conclusão de fluxos essenciais (Cadastro/Login) ou gera exclusão total de usuários PCDs.
* 🟠 **Alto:** Causa grande dificuldade na navegação ou falha em funcionalidades principais do produto.
* 🟡 **Médio:** Falhas de usabilidade que geram confusão, mas permitem a conclusão da tarefa com esforço extra.
* 🔵 **Baixo:** Inconsistências visuais e estéticas que não afetam a operabilidade do sistema.

---

## 📄 Detalhamento Técnico

Para visualizar os passos para reprodução, resultados esperados e evidências detalhadas de cada item acima, acesse a aba [Issues](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues) do repositório ou clique nos links diretos na tabela.

---

## 💡 Sugestões de Melhoria
Recomenda-se a implementação de atributos `aria-live` para feedbacks dinâmicos e a revisão do CSS Global para evitar problemas de visualização em dispositivos mobile com diferentes densidades de tela.
