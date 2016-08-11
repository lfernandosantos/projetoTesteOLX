package com.tdd.projetoOLX;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ConfigWebDriver {

public WebDriver driver;
	
	public WebDriver abrirNavegador(){
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.get("https://www.olx.com.br");
		
		return driver;
	}
	
	public void loginUser(WebDriver otherDriver){
		
		WebElement waitInserirAnuncio = (WebElement) new WebDriverWait(otherDriver, 10)
				.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Inserir anúncio")));
		
		otherDriver.findElement(By.linkText("Inserir anúncio")).click();
		
		WebElement waitBtnSubmit = (WebElement) new WebDriverWait(otherDriver, 10)
				.until(ExpectedConditions.presenceOfElementLocated(By.id("bt_submit_login")));
		
		otherDriver.findElement(By.id("login_email"))
		.sendKeys("lf.fernandosantos@gmail.com");
		
		otherDriver.findElement(By.id("login_password"))
		.sendKeys("testeOLX");
		
		otherDriver.findElement(By.id("bt_submit_login")).click();
		
		WebElement waitLogar = (WebElement) new WebDriverWait(driver, 10)
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h4[contains(text(),'Informações do anúncio')]")));
		
	}
}
