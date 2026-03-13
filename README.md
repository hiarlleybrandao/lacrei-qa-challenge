# Desafio Técnico QA - Lacrei Saúde ⚕️

Este repositório contém a execução do desafio técnico de Quality Assurance da empresa **Lacrei Saúde**.

O objetivo foi validar funcionalidades principais da aplicação, documentar casos de teste e registrar evidências da execução.

---

# Escopo dos Testes

Os testes foram realizados nos seguintes fluxos da aplicação:

- Cadastro de usuário ✅ 
- Busca de profissionais de saúde ✅ 
- Recuperação de senha ❌
- Validação de campos obrigatórios ❌
- Validação de dados inconsistentes ❌

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
- Dispositivo: Mobile

---

# Estrutura do Repositório

lacrei-qa-challenge

/test-cases → Casos de teste
/bug-reports → Registro de bugs
/evidencias → Evidências da execução
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

# Registro de Teste de Desempenho

Simulação de carga realizada para validar a estabilidade e o tempo de resposta em operações críticas.

Ferramenta utilizada: Apache JMeter 5.6.3.

Cenário: Simulação de 30 usuários simultâneos acessando o endpoint de cadastro.

Configuração: 30 threads com 30 segundos de ramp-up.

Resultados obtidos:

**Taxa de Erro: 0,00% (Estabilidade garantida sob carga).**

**Tempo Médio de Resposta: 209ms (Alta performance).**

90% Line: 204ms.

**Conclusão: O ambiente de staging demonstrou robustez, mantendo tempos de resposta excelentes mesmo com múltiplos acessos simultâneos.**

Evidência de Performance:

---

# Registro de Teste de Acessibilidade

Auditoria realizada para garantir que a plataforma atenda aos pilares de inclusão da Lacrei Saúde.

Ferramentas: Google Lighthouse, DevTools e NVDA.

Resultados Lighthouse:

**Nota de Acessibilidade: 96/100 ✅**

**Legibilidade e Contraste: Aprovados com nota superior a 90.**

Resultados de Inspeção Manual (Teclado e Leitor de Tela):

**Navegação via Teclado: Identificada falha crítica onde a tecla Enter não ativa botões e a tecla Espaço executa scroll indevido.**

**Leitor de Tela (NVDA): O sistema identifica rótulos (labels), mas não anuncia automaticamente mensagens de erro de validação (falta de aria-live).**

Insights e Melhorias:

**Proposta de revisão da semântica HTML para garantir operabilidade via teclado.**

**Implementação de alertas dinâmicos para melhorar a experiência de usuários com deficiência visual.**

---

# Evidências

As evidências da execução dos testes podem ser encontradas na pasta:

/evidencias

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

# Documentação detalhada dos casos de teste:

https://www.notion.so/Desafio-T-cnico-Lacrei-Sa-de-31ed978c3bea80ccaac1d4514def8d93?source=copy_link

---

# Autor

Hiarlley Brandão, projeto desenvolvido como prática de Quality Assurance.
