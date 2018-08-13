package com.priceline.po;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import com.priceline.util.FileUtil;

public class HomePage extends FileUtil {

	public static final By homePageContainer = By.id("app-container");
	public static final By flights = By.xpath("//*[@id='search-products']//button[contains(text(),'FLIGHTS')]");
	public static final By roundTrip = By.xpath("//*[@id='search-products']//span[contains(text(),'Round-trip')]");
	public static final By findYourdeal = By.xpath("//*[@id='search-products']//button[@class='desktop primary green mobile-seti']");
	public static final By flightClass = By.xpath("//*[@id='search-products']//div[4]//div[4]//select");
	public static final By departureFrom = By
			.xpath("//*[@id='search-products']//div[4]//div[1]/input[@placeholder='Where from?']");
	public static final By arrivalTo = By.xpath("//*[@id='search-products']//div[4]//div[1]/input[@placeholder='Where to?']");
	public static final By passengerCount = By
			.xpath("//*[@id='search-products']//div[2]/div[4]//div[1]//div[3]/div/div[1]/div/span");
	public static final By departureDate = By
			.xpath("//*[@id='search-products']//div[4]//div[2]/div/div[1]/div/div[1]/div/div/div/input");
	public static final By arrivalDate = By
			.xpath("//*[@id='search-products']//div[4]//div[2]/div/div[1]/div/div[2]/div/div/div/input");

	public static void getPricelineHomePage() {

		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();

		if (driver.findElement(homePageContainer).isDisplayed()) {
			System.out.println("Priceline home page displayed successfully");
		}

		else {
			System.out.println("Priceline home page is not displayed");

		}
	}

	public static void searchFlights() {

		driver.findElement(flights).click();
		driver.findElement(roundTrip).click();

		System.out.println("Flight Type:::: " + driver.findElement(roundTrip).getText());

		driver.findElement(departureFrom).sendKeys(prop.getProperty("departureFrom"));
		System.out.println("Departure City::::" + driver.findElement(departureFrom).getAttribute("value"));

		driver.findElement(arrivalTo).sendKeys(prop.getProperty("arrivalTo"));
		System.out.println("Arrival City::::" + driver.findElement(arrivalTo).getAttribute("value"));

		driver.findElement(departureDate).sendKeys(prop.getProperty("departingDate"));
		System.out.println("Departure date::::" + driver.findElement(departureDate).getAttribute("value"));

		driver.findElement(arrivalDate).sendKeys(prop.getProperty("arrivalDate"));
		System.out.println("Arrival Date::::" + driver.findElement(arrivalDate).getAttribute("value"));

		boolean count = driver.findElement(passengerCount).getText().equals(prop.getProperty("passengerCount"));

		if (count) {
			System.out.println("Passenger count::::" + driver.findElement(passengerCount).getText());
		}

		else {
			System.out.println("Passenger count mismatch");
		}

		Select select = new Select(driver.findElement(flightClass));
		select.selectByVisibleText(prop.getProperty("flightClass"));
		
		driver.findElement(arrivalTo).click();
		driver.findElement(findYourdeal).click();

	}
}
