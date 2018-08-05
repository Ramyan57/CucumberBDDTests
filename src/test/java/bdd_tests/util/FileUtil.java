package bdd_tests.util;

import java.awt.Desktop;
import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class FileUtil {

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
			e.printStackTrace();
		}
	}
}