package com.tdd.projetoOLX;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestAnuncioSteps {
	
	public ConfigWebDriver config;
	public WebDriver driver;
	

	@Given("^usuário já logado no sistema$")
	public void usuário_já_logado_no_sistema() throws Throwable {
		config = new ConfigWebDriver();
		driver = config.abrirNavegador();

		config.loginUser(driver);

	}		
	
	
	@When("^seleciono a categoria \"([^\"]*)\"$")
	public void seleciono_a_categoria(String arg1) throws Throwable {
		driver.findElement(By.xpath("//p[contains(text(),'"+arg1+"')]")).click();
		   
	}
	
	@When("^seleciono a subCategoria \"([^\"]*)\"$")
	public void seleciono_a_subCategoria(String arg1) throws Throwable {
		
		driver.findElement(By.xpath("//p[contains(text(),'"+arg1+"')]")).click();
		
	   
	}
	@When("^informo Título \"([^\"]*)\"$")
	public void informo_Título(String arg1) throws Throwable {
		driver.findElement(By.id("subject")).sendKeys(arg1);
		
	}
	
	@When("^informo a descrição \"([^\"]*)\"$")
	public void informo_a_descrição(String arg1) throws Throwable {
	
		driver.findElement(By.id("body")).sendKeys(arg1);
	}
	
	@When("^informo o preço \"([^\"]*)\"$")
	public void informo_o_preço(String arg1) throws Throwable {
		driver.findElement(By.id("price")).sendKeys(arg1);
	
	}
	
	@When("^informo o CEP \"([^\"]*)\"$")
	public void informo_o_CEP(String arg1) throws Throwable {
		driver.findElement(By.id("zipcode")).sendKeys(arg1);
		
	}
	
	
	@When("^seleciono a opção \"([^\"]*)\"$")
	public void seleciono_a_opção(String arg1) throws Throwable {
		driver.findElement(By.id(arg1)).click();
	}
	
	@Then("^devo ver o resultado \"([^\"]*)\"$")
	public void devo_ver_o_resultado(String arg1) throws Throwable {
	    
		WebElement waitResult = (WebElement) new WebDriverWait(driver, 10)
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//p[contains(text(),'"+arg1+"')]")));
		
		driver.quit();
	}
	
	
}
