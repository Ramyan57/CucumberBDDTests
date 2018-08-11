package com.priceline.stepDefn;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlightFinderStepDefn {
	
	@Given("^i am on priceline homepage$")
	public void i_am_on_priceline_homepage() throws Throwable {

	}

	@When("^i search for flights from \"(.*?)\" to \"(.*?)\"$")
	public void i_search_for_flights_from_to(String arg1, String arg2) throws Throwable {
	    
	}

	@Then("^i should find most expensive flight$")
	public void i_should_find_most_expensive_flight() throws Throwable {
	    
	}
}
