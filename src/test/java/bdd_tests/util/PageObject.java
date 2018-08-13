package bdd_tests.util;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;
import org.openqa.selenium.By;


public class PageObject {

	private int fahrenheit;
	private Response response;

	public void getRapidTablesWebSite() {
		String url = FileUtil.prop.getProperty("rapidTableUrl");
		FileUtil.driver.get(url);
	}

	public void enterTemperature(int celcius) {
		String temperature = String.valueOf(celcius);
		FileUtil.driver.findElement(By.id("x")).sendKeys(temperature);
		FileUtil.driver.findElement(By.xpath("//*[@id='doc']/form/table/tbody/tr[2]/td[2]/button[1]"))
				.click();

	}

	public static void verifyTemperatureOnWebsite(int fahrenheit) {

		String temperature = FileUtil.driver.findElement(By.xpath("//*[@id='doc']/form/table/tbody/tr[3]/td[2]/input")).
				getAttribute("value");
		Assert.assertSame(Integer.valueOf(temperature), fahrenheit);
        FileUtil.driver.close();
	}

	public void convertCentigradeToFahrenheit(int centigrade) {

		fahrenheit = (int) (centigrade * 1.8) + 32;

	}

	public void getTemperature(int centigrade) {
		System.out.println("Temperature in Centigrade is:::" + centigrade);

	}

	public void verifyResponseCode(int statusCode) {
		Assert.assertEquals(statusCode, response.getStatusCode());
		FileUtil.driver.close();
	}

	public void verifyTemperatureInFahrenheit(int temperature) {
		Assert.assertSame(fahrenheit, temperature);
		System.out.println("Temperature in fahrenheit is:::" + fahrenheit);
		FileUtil.driver.close();

	}

	public void verifyGitHubRepositoryLink() {
        System.out.println("Successfully launched " + FileUtil.prop.getProperty("restApiUrl"));
	}

	public void searchKeyword(String keyword) {
		String url = FileUtil.prop.getProperty("restApiUrl");
		RestAssured.useRelaxedHTTPSValidation();
		response = RestAssured.get(url.concat(keyword.trim()));
	}

}
