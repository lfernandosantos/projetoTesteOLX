package com.tdd.projetoOLX;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ById;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static org.junit.Assert.*;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogarSteps {

	public WebDriver driver;
	public ConfigWebDriver config;
	

	@Given("^usuario ja cadastrado$")
	public void usuario_ja_cadastrado() throws Throwable {
		config = new ConfigWebDriver();
	  driver = config.abrirNavegador();
	}

	@When("^eu seleciono \"([^\"]*)\"$")
	public void eu_seleciono(String arg1) throws Throwable {
		driver.findElement(By.linkText(arg1)).click();

	}

	@When("^eu preencho o login com  \"([^\"]*)\"$")
	public void eu_preencho_o_login_com(String arg1) throws Throwable {
		WebElement myDynamicElement = (WebElement) new WebDriverWait(driver, 10)
				.until(ExpectedConditions.presenceOfElementLocated(By.id("bt_submit_login")));
		
		driver.findElement(By.xpath("//*[@id='login_email']"))
		.sendKeys(arg1);
	}

	@When("^eu preencho a senha com \"([^\"]*)\"$")
	public void eu_preencho_a_senha_com(String arg1) throws Throwable {
		driver.findElement(By.id("login_password"))
		.sendKeys(arg1);
	}

	@When("^eu clico em \"([^\"]*)\"$")
	public void eu_clico_em(String arg1) throws Throwable {
		driver.findElement(By.id(arg1)).click();
	}

	@Then("^eu devo ver o resultado como \"([^\"]*)\"$")
	public void eu_devo_ver_o_resultado_como(String arg1) throws Throwable {
	
	    WebElement loginSucess = (WebElement) new WebDriverWait(driver, 15)
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath(arg1)));
	
		driver.quit();
		
	}

	@Given("^usuario inválido$")
	public void usuario_inválido() throws Throwable {
		config = new ConfigWebDriver();
		driver = config.abrirNavegador();
	}
}
