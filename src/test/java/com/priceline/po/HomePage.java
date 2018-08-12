package com.priceline.po;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import com.cucumber.listener.Reporter;
import com.priceline.util.FileUtil;

public class HomePage extends FileUtil {

	public static final By homePageContainer = By.id("app-container");
	public static final By flights = By.xpath("//*[@id='search-products']//button[contains(text(),'FLIGHTS')]");
	public static final By roundTrip = By.xpath("//*[@id='search-products']//span[contains(text(),'Round-trip')]");
	public static final By findYourdeal = By.className("desktop primary green mobile-seti");
	public static final By flightClass = By.xpath("//*[@id='search-products']//div[4]//div[4]//select");
	public static final By departureFrom = By
			.xpath("//*[@id='search-products']//div//div[1]/div[1]/div[2]/div[1]/input");
	public static final By arrivalTo = By.xpath("//*[@id='search-products']//div//div[2]/div[1]/div[2]/div[1]/input");
	public static final By passengerCount = By
			.xpath("//*[@id='search-products']//div[2]/div[4]//div[1]//div[3]/div/div[1]/div/span");
	public static final By departureDate = By
			.xpath("//*[@id='search-products']//div[4]//div[2]/div/div[1]/div/div[1]/div/div/div/input");
	public static final By arrivalDate = By
			.xpath("//*[@id='search-products']//div[4]//div[2]/div/div[1]/div/div[2]/div/div/div/input");
	
	
	public static void getPricelineHomePage() {

		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();

//		if (driver.findElement(homePageContainer).isDisplayed()) {
//			Reporter.addStepLog("Priceline home page displayed successfully");
//		}
//
//		else {
//			Reporter.addStepLog("Priceline home page is not displayed");
//
//		}
	}

	public static void searchFlights() {

		driver.findElement(flights).click();
		driver.findElement(roundTrip).click();
		
		/*Reporter.addStepLog("Priceline home page is not displayed");
		Reporter.addStepLog("Flight Type:::: " + driver.findElement(roundTrip).getText());*/
				
		driver.findElement(departureFrom).sendKeys(prop.getProperty("departureFrom"));
		//Reporter.addStepLog("Departure City::::" + driver.findElement(departureFrom).getText());
		
		driver.findElement(arrivalTo).sendKeys(prop.getProperty("arrivalTo"));
		//Reporter.addStepLog("Arrival City::::" + driver.findElement(arrivalTo).getText());
		
		driver.findElement(departureDate).sendKeys(prop.getProperty("departingDate"));
		//Reporter.addStepLog("Departure date::::" + driver.findElement(departureDate).getText());
		
		driver.findElement(arrivalDate).sendKeys(prop.getProperty("arrivalDate"));
		//Reporter.addStepLog("Departure City::::" + driver.findElement(arrivalDate).getText());
		
		/*boolean count = driver.findElement(passengerCount).getText().equals(prop.getProperty("passengerCount"));
		
		if(count) {
			Reporter.addStepLog("Passenger count::::" + driver.findElement(passengerCount).getText());
		}
		
		else {
			Reporter.addStepLog("Passenger count mismatch");
		}*/
		
		Select select = new Select(driver.findElement(flightClass));
		select.selectByValue(prop.getProperty("flightClass"));
		//Reporter.addStepLog("Flight class::::" + driver.findElement(flightClass).getText());
		
		driver.findElement(findYourdeal).click();
		
	}
}
