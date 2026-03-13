# 📸 Evidências de Execução dos Testes

Este diretório centraliza as comprovações técnicas dos testes realizados na plataforma Lacrei Saúde.

---

## 🚀 Performance e Acessibilidade (Relatórios)
* **[jmeter-performance.jfif]:** Teste de carga e tempo de resposta. A plataforma apresentou uma média estável de **209ms**, indicando boa performance de backend.
* **[lighthouse-acessibilidade.jfif]:** Relatório automatizado validando métricas de SEO, Performance e Acessibilidade (Audit).

## 📱 Evidências de Bugs (Mobile e Interface)
As capturas de tela abaixo comprovam as falhas registradas na aba de **Issues**:

1. **Bug-004 (UX):** Botão "Perfil" flutuando indevidamente sobre a interface mobile.
2. **Bug-005 (Interface):** Falha no carregamento do avatar padrão (placeholder azul).
3. **Bug-006 (Interface):** Overflow lateral (borda branca) em dispositivos móveis.
4. **Bug-007 (Funcional):** Campo de busca ignorando o comando "Enter" do teclado.

---

## ⚙️ Ambientes de Teste
Para garantir a cobertura total, os testes foram executados em diferentes dispositivos e resoluções:

* **Ambiente Desktop:**
    * **SO:** Windows 
    * **Navegador:** Chrome 
    * **Foco:** Testes de performance (JMeter), Acessibilidade (NVDA/Lighthouse) e fluxos funcionais.

* **Ambiente Mobile (Simulado/Real):**
    * **Dispositivo:** iPhone 11 / Android (Simulado via DevTools)
    * **Navegador:** Safari / Chrome Mobile
    * **Foco:** Responsividade, bugs de interface e usabilidade em telas pequenas.
