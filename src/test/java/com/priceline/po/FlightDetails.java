package com.priceline.po;

import org.openqa.selenium.By;
import com.priceline.util.FileUtil;

public class FlightDetails extends FileUtil {

	public static final By flightDetailsPage = By.className("new-details-component__DetailsSection-s1fattt0-1 fVhcHJ");
	public static final By departureFlightDetails = By
			.xpath("//*[@id='flight-details']/div[2]/div[1]/div/div//div/div[1]/div/div[3]");
	public static final By arrivalFlightDetails = By
			.xpath("//*[@id='flight-details']/div[2]/div[2]/div/div//div/div[1]/div/div[3]");

	public static void getFlightDetails() {

		String departureFlight = driver.findElement(departureFlightDetails).getText();
		String arrivalFlight = driver.findElement(arrivalFlightDetails).getText();

		System.out.println("Departure Flight Number::::" + departureFlight);
		System.out.println("Arrival Flight Number::::" + arrivalFlight);
	}

}
