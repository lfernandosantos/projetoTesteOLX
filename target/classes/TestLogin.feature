
Feature: Usuario

	Scenario: Logar com sucesso
	Given usuario ja cadastrado
	When eu seleciono "Minha conta"
	And eu preencho o login com  "lf.fernandosantos@gmail.com"
	And eu preencho a senha com "testeOLX"
	And eu clico em "bt_submit_login"
	Then eu devo ver o resultado como "//h2[contains(text(),'Bem vindo')]"

	Scenario: Login inválido
	Given usuario inválido
	When eu seleciono "Minha conta"
	And eu preencho o login com  "invalido"
	And eu preencho a senha com "1234"
	And eu clico em "bt_submit_login"
	Then eu devo ver o resultado como "//div[contains(text(),'Informe um email válido')]"
	
	Scenario: Senha inválida
	Given usuario ja cadastrado
	When eu seleciono "Minha conta"
	And eu preencho o login com  "lf.fernandosantos@gmail.com"
	And eu preencho a senha com "senhaerrada"
	And eu clico em "bt_submit_login"
	Then eu devo ver o resultado como "//p[contains(text(),'Usuário e/ou senha inválidos')]"
	
	Scenario: Login não informado
	Given usuario ja cadastrado
	When eu seleciono "Minha conta"
	And eu preencho o login com  ""
	And eu preencho a senha com "1234"
	And eu clico em "bt_submit_login"
	Then eu devo ver o resultado como "//div[contains(text(),'Informe um email')]"
	
	Scenario: Senha não informada
	Given usuario ja cadastrado
	When eu seleciono "Minha conta"
	And eu preencho o login com  "lf.fernandosantos@gmail.com"
	And eu preencho a senha com ""
	And eu clico em "bt_submit_login"
	Then eu devo ver o resultado como "//p[contains(text(),'Digite sua senha')]"
	
		

	


	
	