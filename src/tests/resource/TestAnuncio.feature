
Feature: Anuncio

	Scenario: Incluir novo anuncio
	Given usuário já logado no sistema
	When seleciono a categoria "Animais e acessórios"
	And seleciono a subCategoria "Cachorros e acessórios"
	And informo Título "Filhote Labrador"
	And informo a descrição "Vendo Filhote de labrador 2 meses"
	And informo o preço "500"
	And informo o CEP "26562110"
	And seleciono a opção "submit_preview"
	Then devo ver o resultado "foi publicado" 
	
	Scenario: Visualizar novo anuncio
	Given usuário já logado no sistema
	When seleciono a categoria "Animais e acessórios"
	And seleciono a subCategoria "Cachorros e acessórios"
	And informo Título "Filhote Labrador"
	And informo a descrição "Vendo Filhote de labrador 2 meses"
	And informo o preço "500"
	And informo o CEP "26562110"
	And seleciono a opção "submit_preview"
	Then devo ver o resultado "O seu anúncio ainda não foi publicado"
	
