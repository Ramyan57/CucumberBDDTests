package com.priceline.util;

import java.awt.Desktop;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.listener.Reporter;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class FileUtil {

	public static WebDriver driver;
	public static WebDriverWait wait;
	protected static Properties prop = new Properties();

	@Before
	public void setProperty() throws Exception {

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		FileInputStream objFile = new FileInputStream(System.getProperty("user.dir") + "\\RunConfig.properties");
		prop.load(objFile);
	}

	@After(order = 1)
	public void closeBrowser() throws Exception {
		if (driver != null) {
			driver.quit();
		}
	}

	@After(order = 2)
	public void openTestReport() throws Exception {
		
		File srcFile = new File(System.getProperty("user.dir") + "\\test-output\\" + "emailable-report.html");
		File destFile = new File(System.getProperty("user.dir") + "\\output\\" + "test_report_" + System.currentTimeMillis()
		+ ".html");
		
		FileUtils.copyFile(srcFile, destFile);
		Desktop.getDesktop().browse(destFile.toURI());
	}

	public static void captureScreenShot(WebDriver driver) {

		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(src,
					new File(System.getProperty("user.dir") + "\\output\\" + System.currentTimeMillis() + ".png"));
		} catch (IOException e) {

			Reporter.addScenarioLog(e.getMessage());
		}
	}
}
