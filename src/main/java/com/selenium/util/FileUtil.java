package com.selenium.util;

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
import org.testng.Reporter;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

public class FileUtil {

	public static WebDriver driver;
	public static WebDriverWait wait;
	protected Properties obj = new Properties();

	@BeforeTest
	public void setProperty() throws IOException {

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		wait = new WebDriverWait(driver, 5);
		FileInputStream objFile = new FileInputStream(System.getProperty("user.dir") + "\\RunConfig.properties");
		obj.load(objFile);
	}

	@AfterTest
	public void closeBrowser() {
		if (driver != null) {
			driver.quit();
		}
	}

	@AfterSuite
	public void openTestReport() throws IOException {
		
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

			Reporter.log(e.getMessage());
		}
	}
}