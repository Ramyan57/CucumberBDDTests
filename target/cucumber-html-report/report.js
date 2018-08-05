$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberTests.feature");
formatter.feature({
  "line": 1,
  "name": "Verify BDD tests",
  "description": "",
  "id": "verify-bdd-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "verify Rest API status",
  "description": "",
  "id": "verify-bdd-tests;verify-rest-api-status;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "valid git hub repository link",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i search for \"Selenium\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i should see HTTP 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.valid_git_hub_repository_link()"
});
formatter.result({
  "duration": 258796009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 14
    }
  ],
  "location": "StepDefn.i_search_for(String)"
});
formatter.result({
  "duration": 4458771693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "StepDefn.i_should_see_HTTP(int)"
});
formatter.result({
  "duration": 286574708,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify Rest API status",
  "description": "",
  "id": "verify-bdd-tests;verify-rest-api-status;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "valid git hub repository link",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i search for \"java\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i should see HTTP 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.valid_git_hub_repository_link()"
});
formatter.result({
  "duration": 178423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 14
    }
  ],
  "location": "StepDefn.i_search_for(String)"
});
formatter.result({
  "duration": 838617728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "StepDefn.i_should_see_HTTP(int)"
});
formatter.result({
  "duration": 848168087,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify centigrade to Fahrenheit converter",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "temperature in 20",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i apply 20 to fahrenheit formula",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i should see temperature in 68",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "StepDefn.temperature_in(int)"
});
formatter.result({
  "duration": 230529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "StepDefn.i_apply_to_formula(int)"
});
formatter.result({
  "duration": 137765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "68",
      "offset": 28
    }
  ],
  "location": "StepDefn.i_should_see_temperature_in(int)"
});
formatter.result({
  "duration": 479865457,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify centigrade to Fahrenheit converter",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "temperature in 10",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i apply 10 to fahrenheit formula",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i should see temperature in 50",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "StepDefn.temperature_in(int)"
});
formatter.result({
  "duration": 367503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "StepDefn.i_apply_to_formula(int)"
});
formatter.result({
  "duration": 143291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 28
    }
  ],
  "location": "StepDefn.i_should_see_temperature_in(int)"
});
formatter.result({
  "duration": 471287345,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify centigrade to Fahrenheit converter",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "temperature in 15",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i apply 15 to fahrenheit formula",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i should see temperature in 59",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "StepDefn.temperature_in(int)"
});
formatter.result({
  "duration": 250660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "StepDefn.i_apply_to_formula(int)"
});
formatter.result({
  "duration": 159870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "59",
      "offset": 28
    }
  ],
  "location": "StepDefn.i_should_see_temperature_in(int)"
});
formatter.result({
  "duration": 605569872,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verify centigrade to fahrenheit converter on web site",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "i am on rapid tables web site",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "i enter temperature in 20",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "i should see temperature in 68 on web site",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_on_rapid_tables_web_site()"
});
formatter.result({
  "duration": 5361464536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 23
    }
  ],
  "location": "StepDefn.i_enter_temperature_in(int)"
});
formatter.result({
  "duration": 427788489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "68",
      "offset": 28
    }
  ],
  "location": "StepDefn.i_should_see_temperature_in_on_web_site(int)"
});
formatter.result({
  "duration": 3368863951,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verify centigrade to fahrenheit converter on web site",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "i am on rapid tables web site",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "i enter temperature in 10",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "i should see temperature in 50 on web site",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_on_rapid_tables_web_site()"
});
formatter.result({
  "duration": 5571795849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 23
    }
  ],
  "location": "StepDefn.i_enter_temperature_in(int)"
});
formatter.result({
  "duration": 268439921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 28
    }
  ],
  "location": "StepDefn.i_should_see_temperature_in_on_web_site(int)"
});
formatter.result({
  "duration": 2162978998,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify centigrade to fahrenheit converter on web site",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "i am on rapid tables web site",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "i enter temperature in 15",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "i should see temperature in 59 on web site",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_on_rapid_tables_web_site()"
});
formatter.result({
  "duration": 7616436691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 23
    }
  ],
  "location": "StepDefn.i_enter_temperature_in(int)"
});
formatter.result({
  "duration": 263772506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "59",
      "offset": 28
    }
  ],
  "location": "StepDefn.i_should_see_temperature_in_on_web_site(int)"
});
formatter.result({
  "duration": 2122152932,
  "status": "passed"
});
});