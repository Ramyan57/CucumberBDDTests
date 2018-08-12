package com.priceline.po;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.cucumber.listener.Reporter;
import com.priceline.util.FileUtil;

public class ListingPage extends FileUtil {

	public static final By twoStops = By.xpath("//span[contains(text(),'up to 2 stops')]");
	public static final By None = By.xpath("//div[@class='sc-iqzUVk fxHdCM']//div[4]//button[contains(text(),'None')]");
	public static final By deltaAirLines = By.xpath("//span[contains(text(),'Delta Air Lines')]");
	public static final By seeMoreFlights = By.xpath("//*[@id='root']//span[contains(text(),'See More Flights')]");
	public static final By flightOriginalPrice = By.xpath("//*[@id='root']//div[2]//ul/li//span[3]");
	public static final By flightCents = By.xpath("//*[@id='root']//div[6]//ul/li//div[1]/div/sup");
	public static final By dataId = By.xpath("//*[@id='root']//div[6]/div/div/div/section//ul/li");
	public static String flightSection = "//*[@id='root']//ul/li[@data-id='index']//span[3]";

	static HashMap<Integer, Integer> map = new HashMap<>();

	public static void applyLeftNavFilters() {

		wait.until(ExpectedConditions.visibilityOfElementLocated(dataId));
		if (driver.findElement(dataId).isDisplayed()) {

			Reporter.addStepLog("User is sucessfully navigated to listing page");
			driver.findElement(twoStops).click();
			boolean isTwoStops = driver.findElement(twoStops).isSelected();
			driver.findElement(None).click();
			driver.findElement(deltaAirLines).click();
			boolean isDeltaAirlines = driver.findElement(deltaAirLines).isSelected();

			if (!isTwoStops && isDeltaAirlines) {
				Reporter.addStepLog("Stops::::" + "nonstop, up to 1 stop");
				Reporter.addStepLog("Airlines::::" + "Delta Airlines");
			}

			else {
				Reporter.addStepLog("Data mismatch with Airlines and number of stops");
			}
		}

		else {
			Reporter.addStepLog("User is not navigated to listing page");
		}
	}

	public static void clickSeeMoreFlights() {

		boolean seeMoreFlightsDisplayed = driver.findElement(seeMoreFlights).isDisplayed();
		while (seeMoreFlightsDisplayed) {
			driver.findElement(seeMoreFlights).click();
		}
	}

	public static ArrayList<Double> getMaxFlightPrice() {

		List<WebElement> priceInDollar = driver.findElements(flightOriginalPrice);
		List<WebElement> priceInCent = driver.findElements(flightOriginalPrice);
		List<WebElement> flightId = driver.findElements(dataId);
		ArrayList<Double> flightPriceArray = new ArrayList<>();

		for (int i = 0; i < priceInDollar.size(); i++) {
			double price = Double.parseDouble(priceInDollar.get(i).getText().concat(priceInCent.get(i).getText()));
			flightPriceArray.add(price);
			int id = Integer.valueOf(flightId.get(i).getAttribute("data-id"));
			map.put(i, id);
		}

		return flightPriceArray;

	}

	public static void getFlight(ArrayList<Double> flightPriceArray) {

		ArrayList<Integer> indexArray = new ArrayList<>();
		double maxPrice = Collections.max(flightPriceArray);
		indexArray.add(flightPriceArray.indexOf(maxPrice));

		for (int index : indexArray) {
			int id = map.get(index);
			flightSection = flightSection.replace("index", String.valueOf(id));
			driver.findElement(By.xpath(flightSection)).click();
			wait.until(ExpectedConditions.visibilityOfElementLocated(FlightDetails.flightDetailsPage));
			captureScreenShot(driver);

			FlightDetails.getFlightDetails();
			Reporter.addStepLog("Flight Fare::::" + maxPrice);

		}

	}

}
