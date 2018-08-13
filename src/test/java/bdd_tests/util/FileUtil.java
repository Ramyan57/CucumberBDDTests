package bdd_tests.util;

import java.awt.Desktop;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.junit.AfterClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class FileUtil {
	
	 public static WebDriver driver;
	 public static Properties prop = new Properties();

	@Before
    public void setProperty() throws IOException {

        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        FileInputStream propFile = new FileInputStream(System.getProperty("user.dir") + "\\Testdata.properties");
        prop.load(propFile);
    }

    @After(order = 1)
    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }
    
	public static void captureScreenShot(WebDriver driver) {

		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(src,
					new File(System.getProperty("user.dir") + "\\output\\" + System.currentTimeMillis() + ".png"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}