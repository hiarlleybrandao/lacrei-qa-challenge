# 🐛 Relatório de Bugs e Melhorias

Este documento centraliza as falhas reais identificadas durante o ciclo de testes, garantindo a rastreabilidade total entre o Notion e as Issues do GitHub. Os itens aqui listados foram validados em múltiplos ambientes (Desktop e Mobile).

---

## 🔍 Bugs Identificados (Rastreabilidade)

| ID | Categoria | Título do Bug | Impacto | Severidade | Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BUG-001** | **Acessibilidade** | Mensagens de erro não anunciadas pelo NVDA | 🔴 Crítico | Alta | [#3](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/3) |
| **BUG-002** | **UX / Mobile** | Botão "Perfil" flutuando na tela após navegação | 🟠 Alto | Alta | [#4](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/4) |
| **BUG-003** | **Interface** | Avatar padrão do médico exibido incorretamente | 🔵 Baixo | Baixa | [#5](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/5) |
| **BUG-004** | **Interface / Mobile** | Borda branca lateral (Overflow de layout) | 🟡 Médio | Normal | [#6](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/6) |
| **BUG-005** | **Funcional / Acess.** | Busca não retorna resultados ao pressionar "Enter" | 🟠 Alto | Alta | [#7](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues/7) |

---

## 📑 Glossário de Impacto

* 🔴 **Crítico:** Impede a conclusão de fluxos ou gera exclusão total de usuários PCDs.
* 🟠 **Alto:** Falha em funcionalidade principal ou grande dificuldade na navegação mobile.
* 🟡 **Médio:** Falhas de usabilidade que geram confusão, mas permitem a conclusão da tarefa.
* 🔵 **Baixo:** Inconsistências visuais e estéticas que não afetam a funcionalidade.

---

## 📄 Detalhamento Técnico

Para visualizar os passos para reprodução e evidências (prints), acesse a aba [Issues](https://github.com/hiarlleybrandao/lacrei-qa-challenge/issues) do repositório. 

*Nota: Os registros originais de teste de teclado (Enter/Espaço) foram validados como funcionais em ambiente estável e removidos deste relatório final.*

---

## 💡 Sugestões de Melhoria
Recomenda-se a implementação de atributos `aria-live` para feedbacks dinâmicos de erro e a revisão do CSS Global para evitar problemas de visualização em dispositivos mobile com diferentes densidades de tela.
