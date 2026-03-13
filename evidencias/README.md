# 📸 Evidências de Execução dos Testes

Este diretório centraliza as comprovações técnicas dos testes realizados na plataforma Lacrei Saúde, abrangendo performance, acessibilidade e interface.

---

## 🚀 Performance e Acessibilidade (Relatórios)
* **[jmeter-performance.jfif]:** Teste de carga e tempo de resposta. A plataforma apresentou uma média estável de **209ms**, indicando excelente performance de backend e baixa latência.
* **[lighthouse-acessibilidade.jfif]:** Relatório automatizado do Google Lighthouse validando métricas de SEO, Performance e conformidade com boas práticas de Acessibilidade (WCAG).

## 📱 Evidências de Bugs (Mobile e Interface)
As capturas de tela abaixo comprovam as falhas reais registradas e documentadas na aba de **Issues**:

1. **BUG-001 (Acessibilidade):** Print do Inspecionar Elemento demonstrando a ausência de atributos `aria-live` ou `role="alert"` em mensagens de erro (não anunciado pelo NVDA).
2. **BUG-002 (UX/Mobile):** Botão "Perfil" flutuando indevidamente sobre o conteúdo da interface em telas menores. 
3. **BUG-003 (Interface):** Falha visual no carregamento do avatar padrão na lista de profissionais.
4. **BUG-004 (Interface/Mobile):** Identificação de overflow lateral (borda branca), prejudicando a estética da página no celular. 
5. **BUG-005 (Funcional/Acessibilidade):** Campo de busca principal não disparando a pesquisa ao utilizar o comando "Enter" do teclado. 

---

## ⚙️ Ambientes de Teste
Para garantir a cobertura total e a reprodutibilidade dos bugs, os testes foram executados nos seguintes cenários:

* **Ambiente Desktop:**
    * **SO:** Windows 10
    * **Navegador:** Chrome Versão 145.0.7632.160 (Versão oficial) 64 bits
    * **Foco:** Performance (JMeter), auditoria de código (Lighthouse) e validação de acessibilidade (Leitores de tela).

* **Ambiente Mobile (Simulado):**
    * **Dispositivo:** iPhone 11 / Samsung Galaxy S20 (Simulado via DevTools)
    * **Navegador:** Chrome Mobile / Safari
    * **Foco:** Responsividade, bugs de layout (CSS) e usabilidade em telas touch.
