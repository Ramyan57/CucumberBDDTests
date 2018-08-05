package com.selenium.po;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Test;
import com.selenium.util.FileUtil;

public class FindFlights extends FileUtil {

	public static final By passengers = By.xpath("//select[@name='passCount']");
	public static final By departingFrom = By.xpath("//select[@name='fromPort']");
	public static final By arrivingIn = By.xpath("//select[@name='toPort']");
	public static final By returningMonth = By.xpath("//select[@name='toMonth']");
	public static final By returningDate = By.xpath("//select[@name='toDay']");
	public static final By flightFinder = By.xpath("//img[@src='/images/masts/mast_flightfinder.gif']");
	public static final By roundTrip = By.xpath("//input[@value='roundtrip']");
	public static final By serviceClass = By.xpath("//input[@value='Business']");
	public static final By airline = By.xpath("//select[@name='airline']");
	public static final By continueButton = By.xpath("//input[@name='findFlights']");
	public static final By signOnLink = By.xpath("//*[contains(text(), 'SIGN-ON')]");
	public static final By userName = By.xpath("//input[@name='userName']");
	public static final By password = By.xpath("//input[@name='password']");
	public static final By homePageSubmit = By.xpath("//input[@name='login']");

	/*********************************************
	 * @Project Name : New Tours
	 * @Funtion Name : findFlights()
	 * @Author : Ramya Nagaraja
	 * @Description : Method to validate if available arrival and departure flights are displayed to user
	 *	 
	 * ********************************************
	*/
	
	@Test
	public void findFlights() throws ElementNotVisibleException {

		try {
			driver.get(obj.getProperty("url"));
			wait.until(ExpectedConditions.visibilityOfElementLocated(signOnLink));
			driver.manage().window().maximize();
			
			if (driver.findElement(signOnLink).isDisplayed()) {

				driver.findElement(userName).sendKeys(obj.getProperty("userName"));
				driver.findElement(password).sendKeys(obj.getProperty("password"));
				driver.findElement(homePageSubmit).click();

				wait.until(ExpectedConditions.visibilityOfElementLocated(flightFinder));
				Assert.assertTrue(driver.findElement(flightFinder).isDisplayed(),
						"User is not redirected to flight finder page");

				Reporter.log("User is redirected to Flight Finder page <br>");

				driver.findElement(roundTrip).click();
				Reporter.log("Flight Type: <b>" + driver.findElement(roundTrip).getAttribute("value") + "</b>");

				Select passengers = new Select(driver.findElement(FindFlights.passengers));
				passengers.selectByValue("2");
				Reporter.log("Number of Passengers: <b>" + "2" + "</b>");

				Select departingFrom = new Select(driver.findElement(FindFlights.departingFrom));
				departingFrom.selectByValue("London");
				Reporter.log("Departing From: <b>" + "London" + "</b>");

				Reporter.log("Departing Month: <b>" + "November" + "</b>");
				Reporter.log("Departing Date: <b>" + "18" + "</b>");

				Select arrivingIn = new Select(driver.findElement(FindFlights.arrivingIn));
				arrivingIn.selectByValue("Sydney");
				Reporter.log("Arriving In: <b>" + "Sydney" + "</b>");

				Select returningMonth = new Select(driver.findElement(FindFlights.returningMonth));
				returningMonth.selectByValue("3");
				Reporter.log("Returning Month: <b>" + "March" + "</b>");

				Select returningDate = new Select(driver.findElement(FindFlights.returningDate));
				returningDate.selectByValue("5");
				Reporter.log("Returning Date City: <b>" + "5" + "</b>");

				Select airline = new Select(driver.findElement(FindFlights.airline));
				airline.selectByVisibleText("Unified Airlines");
				Reporter.log("Airline: <b>" + "Unified Airlines" + "</b>");

				driver.findElement(serviceClass).click();
				Reporter.log(
						"Service Class: <b>" + driver.findElement(serviceClass).getAttribute("value") + "</b><br>");

				driver.findElement(continueButton).click();

				Assert.assertTrue(driver.findElement(RoundTrip.selectFlight).isDisplayed(),
						"Available flights are not displayed to the user");

				Reporter.log("Departure and arrival flights are displayed to the user");
			}

			else {
				Reporter.log("New Tours home page is not displayed");
			}
		}

		catch (TimeoutException e1) {
			Reporter.log("Timeout Exception::: Element not loaded");
		}

		catch (ElementNotVisibleException e2) {
			Reporter.log("ElementNotVisible Exception::: Element not available in the web page");
		}
	}
}
