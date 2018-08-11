package com.priceline.main;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features = "src/test/resources",
        glue = "classpath:com.priceline.stepDefn",
        format = { "pretty","html:target/cucumber-html-report", "json:target/cucumber.json"})

public class Runner {

}
