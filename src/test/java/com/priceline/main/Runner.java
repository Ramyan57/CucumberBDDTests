package com.priceline.main;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
        glue = { "classpath:com.priceline.stepDefn", "com.priceline.util" },
        plugin = { "pretty","html:output/cucumber-html-report", "json:output/cucumber.json"},
        monochrome = true)

public class Runner {
	

}
