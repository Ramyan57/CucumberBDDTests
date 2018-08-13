$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FlightFinder.feature");
formatter.feature({
  "line": 1,
  "name": "Verify flights module scenarios",
  "description": "",
  "id": "verify-flights-module-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verify expensive flight",
  "description": "",
  "id": "verify-flights-module-scenarios;verify-expensive-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "i am on priceline homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i search for flights from \"\u003cdeparture\u003e\" to \"\u003carrival\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i should find most expensive flight",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "verify-flights-module-scenarios;verify-expensive-flight;",
  "rows": [
    {
      "cells": [
        "departure",
        "arrival"
      ],
      "line": 9,
      "id": "verify-flights-module-scenarios;verify-expensive-flight;;1"
    },
    {
      "cells": [
        "San Francisco",
        "New York City"
      ],
      "line": 10,
      "id": "verify-flights-module-scenarios;verify-expensive-flight;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8355071709,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify expensive flight",
  "description": "",
  "id": "verify-flights-module-scenarios;verify-expensive-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "i am on priceline homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i search for flights from \"San Francisco\" to \"New York City\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i should find most expensive flight",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightFinderStepDefn.i_am_on_priceline_homepage()"
});
formatter.result({
  "duration": 4832845434,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"app-container\"}\n  (Session info: chrome\u003d68.0.3440.75)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027C809070E5D73A7\u0027, ip: \u0027172.22.63.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\rxn8106\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.75, webStorageEnabled: true}\nSession ID: b81add54eb4339c39ab20a67ddcbdb3d\n*** Element info: {Using\u003did, value\u003dapp-container}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.priceline.po.HomePage.getPricelineHomePage(HomePage.java:30)\r\n\tat com.priceline.stepDefn.FlightFinderStepDefn.i_am_on_priceline_homepage(FlightFinderStepDefn.java:14)\r\n\tat ✽.Given i am on priceline homepage(FlightFinder.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "San Francisco",
      "offset": 27
    },
    {
      "val": "New York City",
      "offset": 46
    }
  ],
  "location": "FlightFinderStepDefn.i_search_for_flights_from_to(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlightFinderStepDefn.i_should_find_most_expensive_flight()"
});
formatter.result({
  "status": "skipped"
});
