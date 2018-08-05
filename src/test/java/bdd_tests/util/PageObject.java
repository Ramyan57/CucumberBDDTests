package bdd_tests.util;

import bdd_tests.steps.StepDefn;
import io.restassured.RestAssured;
import io.restassured.config.SSLConfig;
import io.restassured.response.Response;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static io.restassured.RestAssured.given;

public class PageObject {

	private int fahrenheit;
	private Response response;

	public void getRapidTablesWebSite() {
		String url = StepDefn.prop.getProperty("rapidTableUrl");
		StepDefn.driver.get(url);
	}

	public void enterTemperature(int celcius) {
		String temperature = String.valueOf(celcius);
		StepDefn.driver.findElement(By.id("x")).sendKeys(temperature);
		StepDefn.driver.findElement(By.xpath("//*[@id='doc']/form/table/tbody/tr[2]/td[2]/button[1]"))
				.click();

	}

	public static void verifyTemperatureOnWebsite(int fahrenheit) {

		String temperature = StepDefn.driver.findElement(By.xpath("//*[@id='doc']/form/table/tbody/tr[3]/td[2]/input")).
				getAttribute("value");
		Assert.assertSame(Integer.valueOf(temperature), fahrenheit);
        StepDefn.driver.close();
	}

	public void convertCentigradeToFahrenheit(int centigrade) {

		fahrenheit = (int) (centigrade * 1.8) + 32;

	}

	public void getTemperature(int centigrade) {
		System.out.println("Temperature in Centigrade is:::" + centigrade);

	}

	public void verifyResponseCode(int statusCode) {
		Assert.assertEquals(statusCode, response.getStatusCode());
		StepDefn.driver.close();
	}

	public void verifyTemperatureInFahrenheit(int temperature) {
		Assert.assertSame(fahrenheit, temperature);
		System.out.println("Temperature in fahrenheit is:::" + fahrenheit);
		StepDefn.driver.close();

	}

	public void verifyGitHubRepositoryLink() {
        System.out.println("Successfully launched " + StepDefn.prop.getProperty("restApiUrl"));
	}

	public void searchKeyword(String keyword) {
		String url = StepDefn.prop.getProperty("restApiUrl");
		RestAssured.useRelaxedHTTPSValidation();
		response = RestAssured.get(url.concat(keyword.trim()));
	}

}
