$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OLX.feature");
formatter.feature({
  "line": 2,
  "name": "Usuario",
  "description": "",
  "id": "usuario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Logar com sucesso",
  "description": "",
  "id": "usuario;logar-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "usuario ja cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu seleciono \"Minha conta\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "eu preencho o login com  \"lf.fernandosantos@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "eu preencho a senha com \"96871697\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "eu clico em \"bt_submit_login\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "eu devo ver o resultado como \"//h2[contains(text(),\u0027Bem vindo\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogarSteps.usuario_ja_cadastrado()"
});
formatter.result({
  "duration": 7984274429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Minha conta",
      "offset": 14
    }
  ],
  "location": "LogarSteps.eu_seleciono(String)"
});
formatter.result({
  "duration": 3215696438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lf.fernandosantos@gmail.com",
      "offset": 26
    }
  ],
  "location": "LogarSteps.eu_preencho_o_login_com(String)"
});
formatter.result({
  "duration": 133906969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "96871697",
      "offset": 25
    }
  ],
  "location": "LogarSteps.eu_preencho_a_senha_com(String)"
});
formatter.result({
  "duration": 79019453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bt_submit_login",
      "offset": 13
    }
  ],
  "location": "LogarSteps.eu_clico_em(String)"
});
formatter.result({
  "duration": 3664879467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//h2[contains(text(),\u0027Bem vindo\u0027)]",
      "offset": 30
    }
  ],
  "location": "LogarSteps.eu_devo_ver_o_resultado_como(String)"
});
formatter.result({
  "duration": 2231616229,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login inválido",
  "description": "",
  "id": "usuario;login-inválido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "usuario inválido",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "eu seleciono \"Minha conta\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "eu preencho o login com  \"invalido\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "eu preencho a senha com \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "eu clico em \"bt_submit_login\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "eu devo ver o resultado como \"//div[contains(text(),\u0027Informe um email válido\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogarSteps.usuario_inválido()"
});
formatter.result({
  "duration": 6972809479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Minha conta",
      "offset": 14
    }
  ],
  "location": "LogarSteps.eu_seleciono(String)"
});
formatter.result({
  "duration": 2966594808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalido",
      "offset": 26
    }
  ],
  "location": "LogarSteps.eu_preencho_o_login_com(String)"
});
formatter.result({
  "duration": 97252525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    }
  ],
  "location": "LogarSteps.eu_preencho_a_senha_com(String)"
});
formatter.result({
  "duration": 78770361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bt_submit_login",
      "offset": 13
    }
  ],
  "location": "LogarSteps.eu_clico_em(String)"
});
formatter.result({
  "duration": 91868030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[contains(text(),\u0027Informe um email válido\u0027)]",
      "offset": 30
    }
  ],
  "location": "LogarSteps.eu_devo_ver_o_resultado_como(String)"
});
formatter.result({
  "duration": 1683879158,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Senha inválida",
  "description": "",
  "id": "usuario;senha-inválida",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "usuario ja cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "eu seleciono \"Minha conta\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "eu preencho o login com  \"lfernandosantos@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "eu preencho a senha com \"senhaerrada\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eu clico em \"bt_submit_login\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "eu devo ver o resultado como \"//p[contains(text(),\u0027Usuário e/ou senha inválidos\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogarSteps.usuario_ja_cadastrado()"
});
formatter.result({
  "duration": 6449204346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Minha conta",
      "offset": 14
    }
  ],
  "location": "LogarSteps.eu_seleciono(String)"
});
formatter.result({
  "duration": 2830675363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lfernandosantos@gmail.com",
      "offset": 26
    }
  ],
  "location": "LogarSteps.eu_preencho_o_login_com(String)"
});
formatter.result({
  "duration": 132122269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senhaerrada",
      "offset": 25
    }
  ],
  "location": "LogarSteps.eu_preencho_a_senha_com(String)"
});
formatter.result({
  "duration": 73479817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bt_submit_login",
      "offset": 13
    }
  ],
  "location": "LogarSteps.eu_clico_em(String)"
});
formatter.result({
  "duration": 1359673677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//p[contains(text(),\u0027Usuário e/ou senha inválidos\u0027)]",
      "offset": 30
    }
  ],
  "location": "LogarSteps.eu_devo_ver_o_resultado_como(String)"
});
formatter.result({
  "duration": 1741611299,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login não informado",
  "description": "",
  "id": "usuario;login-não-informado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "usuario ja cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "eu seleciono \"Minha conta\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "eu preencho o login com  \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "eu preencho a senha com \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "eu clico em \"bt_submit_login\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "eu devo ver o resultado como \"//div[contains(text(),\u0027Informe um email\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogarSteps.usuario_ja_cadastrado()"
});
formatter.result({
  "duration": 6691583646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Minha conta",
      "offset": 14
    }
  ],
  "location": "LogarSteps.eu_seleciono(String)"
});
formatter.result({
  "duration": 2902754186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "LogarSteps.eu_preencho_o_login_com(String)"
});
formatter.result({
  "duration": 76011004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    }
  ],
  "location": "LogarSteps.eu_preencho_a_senha_com(String)"
});
formatter.result({
  "duration": 76133774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bt_submit_login",
      "offset": 13
    }
  ],
  "location": "LogarSteps.eu_clico_em(String)"
});
formatter.result({
  "duration": 58708771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//div[contains(text(),\u0027Informe um email\u0027)]",
      "offset": 30
    }
  ],
  "location": "LogarSteps.eu_devo_ver_o_resultado_como(String)"
});
formatter.result({
  "duration": 1710916118,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Senha não informada",
  "description": "",
  "id": "usuario;senha-não-informada",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "usuario ja cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "eu seleciono \"Minha conta\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "eu preencho o login com  \"lfernandosantos@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "eu preencho a senha com \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "eu clico em \"bt_submit_login\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "eu devo ver o resultado como \"//p[contains(text(),\u0027Digite sua senha\u0027)]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogarSteps.usuario_ja_cadastrado()"
});
formatter.result({
  "duration": 6667262224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Minha conta",
      "offset": 14
    }
  ],
  "location": "LogarSteps.eu_seleciono(String)"
});
formatter.result({
  "duration": 2960428297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lfernandosantos@gmail.com",
      "offset": 26
    }
  ],
  "location": "LogarSteps.eu_preencho_o_login_com(String)"
});
formatter.result({
  "duration": 133908548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "LogarSteps.eu_preencho_a_senha_com(String)"
});
formatter.result({
  "duration": 56824593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bt_submit_login",
      "offset": 13
    }
  ],
  "location": "LogarSteps.eu_clico_em(String)"
});
formatter.result({
  "duration": 45080548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//p[contains(text(),\u0027Digite sua senha\u0027)]",
      "offset": 30
    }
  ],
  "location": "LogarSteps.eu_devo_ver_o_resultado_como(String)"
});
formatter.result({
  "duration": 1777288717,
  "status": "passed"
});
formatter.uri("TestAnuncio.feature");
formatter.feature({
  "line": 2,
  "name": "Anuncio",
  "description": "",
  "id": "anuncio",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Incluir novo anuncio",
  "description": "",
  "id": "anuncio;incluir-novo-anuncio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "usuário já logado no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "seleciono a categoria \"Animais e acessórios\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "seleciono a subCategoria \"Cachorros e acessórios\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "informo Título \"Filhote Labrador\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "informo a descrição \"Vendo Filhote de labrador 2 meses\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "informo o preço \"500\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "informo o CEP \"26562110\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "seleciono a opção \"submit_preview\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "devo ver o resultado \"foi publicado\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAnuncioSteps.usuário_já_logado_no_sistema()"
});
formatter.result({
  "duration": 15268980842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Animais e acessórios",
      "offset": 23
    }
  ],
  "location": "TestAnuncioSteps.seleciono_a_categoria(String)"
});
formatter.result({
  "duration": 77265939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cachorros e acessórios",
      "offset": 26
    }
  ],
  "location": "TestAnuncioSteps.seleciono_a_subCategoria(String)"
});
formatter.result({
  "duration": 868446182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Filhote Labrador",
      "offset": 16
    }
  ],
  "location": "TestAnuncioSteps.informo_Título(String)"
});
formatter.result({
  "duration": 272082454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vendo Filhote de labrador 2 meses",
      "offset": 21
    }
  ],
  "location": "TestAnuncioSteps.informo_a_descrição(String)"
});
formatter.result({
  "duration": 165721287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 17
    }
  ],
  "location": "TestAnuncioSteps.informo_o_preço(String)"
});
formatter.result({
  "duration": 86275891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26562110",
      "offset": 15
    }
  ],
  "location": "TestAnuncioSteps.informo_o_CEP(String)"
});
formatter.result({
  "duration": 90543617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit_preview",
      "offset": 19
    }
  ],
  "location": "TestAnuncioSteps.seleciono_a_opção(String)"
});
formatter.result({
  "duration": 1282329971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "foi publicado",
      "offset": 22
    }
  ],
  "location": "TestAnuncioSteps.devo_ver_o_resultado(String)"
});
formatter.result({
  "duration": 1780299534,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Visualizar novo anuncio",
  "description": "",
  "id": "anuncio;visualizar-novo-anuncio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "usuário já logado no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "seleciono a categoria \"Animais e acessórios\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "seleciono a subCategoria \"Cachorros e acessórios\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "informo Título \"Filhote Labrador\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "informo a descrição \"Vendo Filhote de labrador 2 meses\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "informo o preço \"500\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "informo o CEP \"26562110\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "seleciono a opção \"submit_preview\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "devo ver o resultado \"O seu anúncio ainda não foi publicado\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAnuncioSteps.usuário_já_logado_no_sistema()"
});
formatter.result({
  "duration": 15103730895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Animais e acessórios",
      "offset": 23
    }
  ],
  "location": "TestAnuncioSteps.seleciono_a_categoria(String)"
});
formatter.result({
  "duration": 829569252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cachorros e acessórios",
      "offset": 26
    }
  ],
  "location": "TestAnuncioSteps.seleciono_a_subCategoria(String)"
});
formatter.result({
  "duration": 67584110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Filhote Labrador",
      "offset": 16
    }
  ],
  "location": "TestAnuncioSteps.informo_Título(String)"
});
formatter.result({
  "duration": 108606549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vendo Filhote de labrador 2 meses",
      "offset": 21
    }
  ],
  "location": "TestAnuncioSteps.informo_a_descrição(String)"
});
formatter.result({
  "duration": 348640198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 17
    }
  ],
  "location": "TestAnuncioSteps.informo_o_preço(String)"
});
formatter.result({
  "duration": 77944922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26562110",
      "offset": 15
    }
  ],
  "location": "TestAnuncioSteps.informo_o_CEP(String)"
});
formatter.result({
  "duration": 85295312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit_preview",
      "offset": 19
    }
  ],
  "location": "TestAnuncioSteps.seleciono_a_opção(String)"
});
formatter.result({
  "duration": 1237200473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O seu anúncio ainda não foi publicado",
      "offset": 22
    }
  ],
  "location": "TestAnuncioSteps.devo_ver_o_resultado(String)"
});
formatter.result({
  "duration": 1739729883,
  "status": "passed"
});
formatter.uri("TestConta.feature");
formatter.feature({
  "line": 1,
  "name": "Gerenciar Conta",
  "description": "",
  "id": "gerenciar-conta",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Alterar Dados",
  "description": "",
  "id": "gerenciar-conta;alterar-dados",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 4,
  "name": "Chats",
  "description": "",
  "id": "gerenciar-conta;chats",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 5,
  "name": "Minha Loja",
  "description": "",
  "id": "gerenciar-conta;minha-loja",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 6,
  "name": "Favoritos",
  "description": "",
  "id": "gerenciar-conta;favoritos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.uri("TestUser.feature");
formatter.feature({
  "line": 1,
  "name": "Usuário",
  "description": "",
  "id": "usuário",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Incluir Usuário",
  "description": "",
  "id": "usuário;incluir-usuário",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 4,
  "name": "Alterar Usuário",
  "description": "",
  "id": "usuário;alterar-usuário",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 5,
  "name": "Desativar Usuário",
  "description": "",
  "id": "usuário;desativar-usuário",
  "type": "scenario",
  "keyword": "Scenario"
});
});