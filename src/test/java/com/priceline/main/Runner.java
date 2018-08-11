package com.priceline.main;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
        glue = "classpath:com.priceline.stepDefn",
        plugin = { "pretty","html:target/cucumber-html-report", "json:target/cucumber.json"})

public class Runner {

}
