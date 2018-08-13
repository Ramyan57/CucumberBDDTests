$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberTests.feature");
formatter.feature({
  "line": 1,
  "name": "Verify BDD tests",
  "description": "",
  "id": "verify-bdd-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verify Rest API status",
  "description": "",
  "id": "verify-bdd-tests;verify-rest-api-status",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "valid git hub repository link",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i search for \"\u003ckeyword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i should see HTTP \u003cresponse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "verify-bdd-tests;verify-rest-api-status;",
  "rows": [
    {
      "cells": [
        "keyword",
        "response code"
      ],
      "line": 9,
      "id": "verify-bdd-tests;verify-rest-api-status;;1"
    },
    {
      "cells": [
        "Selenium",
        "200"
      ],
      "line": 10,
      "id": "verify-bdd-tests;verify-rest-api-status;;2"
    },
    {
      "cells": [
        "java",
        "200"
      ],
      "line": 11,
      "id": "verify-bdd-tests;verify-rest-api-status;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 123775216831,
  "status": "passed"
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
  "duration": 10752993714,
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
  "duration": 19056698594,
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
  "duration": 2832442798,
  "status": "passed"
});
formatter.after({
  "duration": 1795740194,
  "status": "passed"
});
formatter.before({
  "duration": 7134862006,
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
  "duration": 222634,
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
  "duration": 10944975108,
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
  "duration": 1367081302,
  "status": "passed"
});
formatter.after({
  "duration": 2307557944,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "verify centigrade to Fahrenheit converter",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "temperature in \u003ccentigrade\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i apply \u003ccentigrade\u003e to fahrenheit formula",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i should see temperature in \u003cfahrenheit\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;",
  "rows": [
    {
      "cells": [
        "centigrade",
        "fahrenheit"
      ],
      "line": 19,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;;1"
    },
    {
      "cells": [
        "20",
        "68"
      ],
      "line": 20,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;;2"
    },
    {
      "cells": [
        "10",
        "50"
      ],
      "line": 21,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;;3"
    },
    {
      "cells": [
        "15",
        "59"
      ],
      "line": 22,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4925589387,
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
  "duration": 290529,
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
  "duration": 171712,
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
  "duration": 656523802,
  "status": "passed"
});
formatter.after({
  "duration": 1703692169,
  "status": "passed"
});
formatter.before({
  "duration": 4251859623,
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
  "duration": 328819,
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
  "duration": 129475,
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
  "duration": 472813412,
  "status": "passed"
});
formatter.after({
  "duration": 1790636196,
  "status": "passed"
});
formatter.before({
  "duration": 4356632514,
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
  "duration": 596059,
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
  "duration": 184739,
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
  "duration": 616853537,
  "status": "passed"
});
formatter.after({
  "duration": 2172346197,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "verify centigrade to fahrenheit converter on web site",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "i am on rapid tables web site",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "i enter temperature in \u003ccentigrade\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "i should see temperature in \u003cfahrenheit\u003e on web site",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;",
  "rows": [
    {
      "cells": [
        "centigrade",
        "fahrenheit"
      ],
      "line": 30,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;;1"
    },
    {
      "cells": [
        "20",
        "68"
      ],
      "line": 31,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;;2"
    },
    {
      "cells": [
        "10",
        "50"
      ],
      "line": 32,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;;3"
    },
    {
      "cells": [
        "15",
        "59"
      ],
      "line": 33,
      "id": "verify-bdd-tests;verify-centigrade-to-fahrenheit-converter-on-web-site;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3672286986,
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
  "duration": 54367078539,
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
  "duration": 219521669,
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
  "duration": 2351381277,
  "status": "passed"
});
formatter.after({
  "duration": 1371106080,
  "status": "passed"
});
formatter.before({
  "duration": 3426912164,
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
  "duration": 9510879451,
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
  "duration": 296268752,
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
  "duration": 2202417156,
  "status": "passed"
});
formatter.after({
  "duration": 1707790762,
  "status": "passed"
});
formatter.before({
  "duration": 3566630666,
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
  "duration": 15024396955,
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
  "duration": 250562111,
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
  "duration": 2237560928,
  "status": "passed"
});
formatter.after({
  "duration": 1735353143,
  "status": "passed"
});
});