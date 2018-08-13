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
  "duration": 9668691292,
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
  "duration": 15197709083,
  "status": "passed"
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
  "duration": 59267172,
  "error_message": "java.lang.NullPointerException\r\n\tat com.priceline.po.ListingPage.applyLeftNavFilters(ListingPage.java:29)\r\n\tat com.priceline.stepDefn.FlightFinderStepDefn.i_search_for_flights_from_to(FlightFinderStepDefn.java:20)\r\n\tat ✽.When i search for flights from \"San Francisco\" to \"New York City\"(FlightFinder.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FlightFinderStepDefn.i_should_find_most_expensive_flight()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2230440594,
  "status": "passed"
});
formatter.after({
  "duration": 1393990387,
  "status": "passed"
});
});