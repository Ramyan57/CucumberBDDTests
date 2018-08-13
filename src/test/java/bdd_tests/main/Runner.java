package bdd_tests.main;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
        glue = {"classpath:bdd_tests.steps","bdd_tests.util"},
        plugin = { "pretty","html:output/cucumber-html-report", "json:output/cucumber.json"},
        monochrome = true)

public class Runner {

}
