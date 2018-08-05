package bdd_tests.steps;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import cucumber.api.java.Before;
import org.junit.After;
import bdd_tests.util.PageObject;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Unit test for simple App.
 */
public class StepDefn {

	PageObject po = new PageObject();
    public static WebDriver driver;
    public static Properties prop = new Properties();

	@Before
    public void setProperty() throws IOException {

        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        FileInputStream propFile = new FileInputStream(System.getProperty("user.dir") + "\\Testdata.properties");
        prop.load(propFile);
    }

    @After
    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }

	@Given("^valid git hub repository link$")
	public void valid_git_hub_repository_link() {
		po.verifyGitHubRepositoryLink();
	}

	@When("^i search for \"([^\"]*)\"$")
	public void i_search_for(String arg1) throws Throwable {
		po.searchKeyword(arg1);
	}
	
	@Then("^i should see HTTP (\\d+)$")
	public void i_should_see_HTTP(int arg1) {
		po.verifyResponseCode(arg1);
	}

	@Given("^temperature in (\\d+)$")
	public void temperature_in(int arg1)  {
		po.getTemperature(arg1);
	}

	@When("^i apply (\\d+) to fahrenheit formula$")
	public void i_apply_to_formula(int arg1)  {
		po.convertCentigradeToFahrenheit(arg1);
	}

	@Then("^i should see temperature in (\\d+)$")
	public void i_should_see_temperature_in(int arg1)  {
		po.verifyTemperatureInFahrenheit(arg1);
	}

	@Given("^i am on rapid tables web site$")
	public void i_am_on_rapid_tables_web_site() {
		po.getRapidTablesWebSite();
	}

	@When("^i enter temperature in (\\d+)$")
	public void i_enter_temperature_in(int arg1)  {
		po.enterTemperature(arg1);
	}

	@Then("^i should see temperature in (\\d+) on web site$")
	public void i_should_see_temperature_in_on_web_site(int arg1)  {
		PageObject.verifyTemperatureOnWebsite(arg1);
	}
}

