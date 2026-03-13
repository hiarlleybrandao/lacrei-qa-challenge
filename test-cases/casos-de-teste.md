"Nota: Os cenários abaixo estão organizados seguindo a prioridade da jornada do usuário final na plataforma Lacrei Saúde."

# 📋 Casos de Teste - Lacrei Saúde

Este documento detalha os cenários de teste escritos em BDD (Behavior Driven Development) para as principais funcionalidades da plataforma, conforme documentado no Notion.

---

## 1. Fluxo de Cadastro de Novo Usuário

**CT-001 – Realizar Cadastro de Novo Usuário**
* **Descrição:** Validar que um novo usuário consegue se cadastrar com sucesso ao preencher todos os campos obrigatórios com dados válidos e aceitar os termos.
* **Pré-condições:** O usuário deve estar na tela de cadastro; o e-mail não deve estar previamente cadastrado.
* **Cenário:**
    * **Dado** que o usuário está na página inicial da Lacrei Saúde
    * **E** clica em "Criar conta"
    * **Quando** preenche todos os campos (Nome, Sobrenome, E-mail, Senha) corretamente
    * **E** seleciona os checkboxes de Termos de Uso e Maioridade
    * **E** clica no botão "Cadastrar"
    * **Então** o sistema deve processar as informações e redirecionar para a tela de confirmação.
* **Status:** ✅ Passou.

**CT-005 – Cadastro com e-mail já cadastrado**
* **Descrição:** Validar que o sistema impede o cadastro quando o e-mail já existe na base.
* **Cenário:**
    * **Dado** que o usuário preenche o formulário com um e-mail já existente
    * **Quando** clica em "Cadastrar"
    * **Então** o sistema deve exibir a mensagem: "Já existe um usuário cadastrado com este endereço de e-mail."
* **Status:** ✅ Passou.

**CT-006 – Cadastro com senhas diferentes**
* **Descrição:** Validar impedimento de cadastro quando os campos "Senha" e "Confirme sua senha" divergem.
* **Cenário:**
    * **Dado** que os campos de senha contêm valores diferentes
    * **Quando** o usuário tenta avançar
    * **Então** o sistema deve exibir a mensagem: "Senhas incompatíveis, tente novamente."
* **Status:** ✅ Passou.

**CT-007 – Cadastro sem preenchimento de e-mail e senha**
* **Descrição:** Validar que o sistema impede o envio do formulário com campos obrigatórios vazios.
* **Cenário:**
    * **Dado** que o usuário deixa os campos de e-mail e senha em branco
    * **Quando** clica em "Cadastrar"
    * **Então** o sistema deve destacar os campos e exibir: "Este campo é obrigatório."
* **Status:** ✅ Passou.

---

## 2. Fluxo de Pós-Cadastro e Onboarding

**CT-002 – Pós-Cadastro**
* **Descrição:** Validar que após o cadastro, o usuário consegue completar as etapas de configuração de perfil.
* **Cenário:**
    * **Dado** que o usuário realizou o login com sucesso
    * **Quando** avança pelas etapas de Pronome, Etnia, Gênero, Sexualidade e Deficiência
    * **E** clica em "Concluir"
    * **Então** o sistema deve exibir a mensagem de confirmação: "Seu cadastro foi concluído!"
* **Status:** ✅ Passou.

---

## 3. Fluxo de Busca de Profissionais

**CT-003 – Buscar Profissional de Saúde**
* **Descrição:** Validar a busca e visualização de profissionais conforme critérios informados.
* **Cenário:**
    * **Dado** que o usuário acessa a opção de "Buscar profissional"
    * **Quando** digita um critério de busca (nome, especialidade ou localidade)
    * **E** pressiona a tecla Enter ou clica no ícone da lupa
    * **Então** o sistema deve exibir uma lista de profissionais correspondentes.
* **Observação de Bug:** A busca só é executada ao clicar no ícone; o "Enter" no teclado não retorna resultados.
* **Status:** ❌ Falhou.

---

## 4. Recuperação de Acesso

**CT-004 – Recuperação de Senha (Esqueci minha senha)**
* **Descrição:** Validar o fluxo de recuperação de conta via e-mail.
* **Cenário:**
    * **Dado** que o usuário clica em "Esqueci minha senha"
    * **Quando** informa um e-mail válido e clica em "Enviar"
    * **Então** o sistema deve enviar as instruções de recuperação para o e-mail informado.
* **Status:** ❌ Falhou (Redirecionamento instantâneo para tela de login impedindo o processo).
