package com.tdd.projetoOLX;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/cucumber"},
		features = "src/tests/resource")
public class OLXRunner {


}
