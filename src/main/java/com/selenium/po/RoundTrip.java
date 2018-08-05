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

public class RoundTrip extends FileUtil {

	
	public static final By reserveFlight = By.xpath("//input[@name='reserveFlights']");
	public static final By paymentPage = By.xpath("//img[@src='/images/masts/mast_book.gif']");
	public static final By passengerFirstName = By.xpath("//input[@name='passFirst0']");
	public static final By passengerLastName = By.xpath("//input[@name='passLast0']");
	public static final By selectFlight = By.xpath("//img[@src='/images/masts/mast_selectflight.gif']");
	public static final By selectDepartFlight = By.xpath("//input[@value='Unified Airlines$363$281$11:24']");
	public static final By selectReturnFlight = By.xpath("//input[@value='Pangea Airlines$632$282$16:37']");
	public static final By creditCardNumber = By.xpath("//input[@name='creditnumber']");
	public static final By securePurchase = By.xpath("//input[@name='buyFlights']");
	public static final By flightConfirmation = By.xpath("//img[@src='/images/masts/mast_confirmation.gif']");
	public static final By signOnLink = By.xpath("//*[contains(text(), 'SIGN-ON')]");
	public static final By userName = By.xpath("//input[@name='userName']");
	public static final By password = By.xpath("//input[@name='password']");
	public static final By homePageSubmit = By.xpath("//input[@name='login']");
	

	/*********************************************
	 * @Project Name : New Tours
	 * @Funtion Name : roundTrip()
	 * @Author : Ramya Nagaraja
	 * @Description : Method to validate if user is able to successfully book round trip
	 *	 
	 * ********************************************
	*/
	
	@Test
	public void roundTrip() throws TimeoutException, ElementNotVisibleException {

		try {

			driver.get(obj.getProperty("url"));
			wait.until(ExpectedConditions.visibilityOfElementLocated(signOnLink));
			driver.manage().window().maximize();
			
			if (driver.findElement(signOnLink).isDisplayed()) {

				driver.findElement(userName).sendKeys(obj.getProperty("userName"));
				driver.findElement(password).sendKeys(obj.getProperty("password"));
				driver.findElement(homePageSubmit).click();

				wait.until(ExpectedConditions.visibilityOfElementLocated(FindFlights.flightFinder));
				Assert.assertTrue(driver.findElement(FindFlights.flightFinder).isDisplayed(),
						"User is not redirected to flight finder page");

				Reporter.log("User is redirected to Flight Finder page <br>");

				driver.findElement(FindFlights.roundTrip).click();

				Select passengers = new Select(driver.findElement(FindFlights.passengers));
				passengers.selectByValue("2");

				Select departingFrom = new Select(driver.findElement(FindFlights.departingFrom));
				departingFrom.selectByValue("London");

				Select arrivingIn = new Select(driver.findElement(FindFlights.arrivingIn));
				arrivingIn.selectByValue("Sydney");

				Select returningMonth = new Select(driver.findElement(FindFlights.returningMonth));
				returningMonth.selectByValue("3");

				Select returningDate = new Select(driver.findElement(FindFlights.returningDate));
				returningDate.selectByValue("5");

				Select airline = new Select(driver.findElement(FindFlights.airline));
				airline.selectByVisibleText("Unified Airlines");

				driver.findElement(FindFlights.serviceClass).click();
				driver.findElement(FindFlights.continueButton).click();

				Assert.assertTrue(driver.findElement(selectFlight).isDisplayed(),
						"Available flights are not displayed to the user");

				Reporter.log("Departure and arrival flights are displayed to the user <br>");

				driver.findElement(selectDepartFlight).click();
				String departureFlight = driver.findElement(selectDepartFlight).getAttribute("value")
						.split("Airlines")[0].trim().concat(" Airlines");
				Reporter.log("Departure Flight: <b>" + departureFlight + "</b><br>");

				driver.findElement(selectReturnFlight).click();
				String returnFlight = driver.findElement(selectReturnFlight).getAttribute("value").split("Airlines")[0]
						.trim().concat(" Airlines");
				Reporter.log("Return Flight: <b>" + returnFlight + "</b><br>");

				driver.findElement(reserveFlight).click();

				Assert.assertTrue(driver.findElement(paymentPage).isDisplayed(),
						"Payment page is not displayed to the user");

				Reporter.log("Payment page is displayed to the user<br>");

				driver.findElement(passengerFirstName).sendKeys(obj.getProperty("passengerFirstName"));
				driver.findElement(passengerLastName).sendKeys(obj.getProperty("passengerLastName"));
				driver.findElement(creditCardNumber).sendKeys(obj.getProperty("creditCardNumber"));
				driver.findElement(securePurchase).click();

				Assert.assertTrue(driver.findElement(flightConfirmation).isDisplayed(),
						"Flight confirmation details are not displayed to the user");

				Reporter.log("Flight confirmation details are displayed to the user");
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
