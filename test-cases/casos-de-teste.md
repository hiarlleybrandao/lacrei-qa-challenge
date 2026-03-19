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
    * **Quando** o usuário informa um e-mail válido e clica em "Enviar"
    * **Então** o sistema deve enviar as instruções de recuperação para o e-mail informado.
* **Status:** ❌ Falhou (Redirecionamento instantâneo para tela de login impedindo o processo).

---

## 5. Validações Negativas e Dados Inválidos (Cadastro)

CT-008 – Cadastro com E-mail em formato inválido
* **Descrição:** Validar o fluxo de cadastro com e-mail em formato inválido.
* **Cenário:**
    * **Dado** que o usuário insira um e-mail sem o caractere "@" (ex: hiarlley.com) ou sem domínio (ex: hiarlley@lacrei)
    * **Quando** tenta seguir com cadastro
    * **Então** o sistema deve exibir a mensagem: "Por favor, utilize um formato de e-mail válido. Por exemplo: email@dominio.com.br"
* **Status:** ✅ Passou.
 
CT-009 – Senha fora dos critérios de segurança
* **Descrição:** Validar o fluxo de cadastro com senha fora dos critérios de segurança.
* **Cenário:**
    * **Dado** que o usuário insira uma senha muito curta (menos de 8 caracteres) ou sem caracteres especiais/números
    * **Quando** tenta seguir com cadastro
    * **Então** o sistema deve exibir a mensagem: "Sua senha deve atender aos seguintes critérios: 8 caracteres ou mais, 1 letra maiúscula ou mais, 1 letra minúscula ou mais, 1 número ou mais, 1 caractere especial ou mais (ex: #!*-_&)".
* **Status:** ✅ Passou.
 
CT-010 – Nome/Sobrenome com caracteres inválidos
* **Descrição:** Validar o fluxo de cadastro com "Nome" e "Sobrenome" preenchidos com caracteres inválidos 
* **Cenário:**
    * **Dado** que o usuário insira números ou símbolos no campo "Nome" e/ou "Sobrenome"
    * **Quando** tenta seguir com cadastro
    * **Então** o sistema deve exibir a mensagem: "Digite um nome válido" e "Digite um sobrenome válido"
* **Status:** ✅ Passou.
 
---

## 6. Fluxos Alternativos (Jornada do Usuário)

CT-011 – Busca por Profissional sem resultados
* **Descrição:** Validar busca de profissional com atributos inexistentes
* **Cenário:**
    * **Dado** que o usuário pesquise por um termo inexistente (ex: "Médico de Marte")
    * **Quando** clico na lupa
    * **Então** o sistema deve exibir uma mensagem amigável: "Não encontramos o que você procura."
* **Status:** ✅ Passou.
 
CT-012 – Navegação via "Voltar" no Onboarding (Pós-cadastro)
* **Descrição:** Validar navegação no onboarding 
* **Cenário:**
    * **Dado** que o usuário está na etapa de "Etnia" no pós-cadastro
    * **Quando** clica no botão "Voltar"
    * **Então** o sistema deve manter os dados preenchidos na etapa anterior (Pronome) para que o usuário possa editá-los.
* **Status:** ✅ Passou.
 
---

## 7. Testes de Segurança/Privacidade

CT-013 – Acesso direto a URLs restritas
* **Descrição:** Validar que um usuário não logado não consegue acessar a tela de "Buscar profissional" digitando a URL diretamente. 
* **Cenário:**
    * **Dado** que o usuário não está autenticado no sistema
    * **Quando** tenta acessar a URL /saude/paciente/profissional/busca
    * **Então** o sistema deve redirecionar o usuário para a tela de Login.
* **Status:** ✅ Passou.


