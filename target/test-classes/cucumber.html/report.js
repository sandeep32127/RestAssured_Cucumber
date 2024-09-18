$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/ErgastCheck.feature");
formatter.feature({
  "line": 1,
  "name": "Checking one Rest Assured end point with cucumber framwork BDD",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Checking the number of races",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User sets the authorization as a Basic Authorization",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User hits the API with \u003cURL\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should validate successfully the response code as \u003ccode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races;",
  "rows": [
    {
      "cells": [
        "URL",
        "code"
      ],
      "line": 8,
      "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races;;1"
    },
    {
      "cells": [
        "2020/last.json",
        "200"
      ],
      "line": 9,
      "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races;;2"
    },
    {
      "cells": [
        "2022/last.json",
        "404"
      ],
      "line": 10,
      "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 931050700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Checking the number of races",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User sets the authorization as a Basic Authorization",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User hits the API with 2020/last.json",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should validate successfully the response code as 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.setBasicAUth()"
});
formatter.result({
  "duration": 142605200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020/last.json",
      "offset": 23
    }
  ],
  "location": "MySteps.executeAPI(String)"
});
formatter.result({
  "duration": 2034713000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 55
    }
  ],
  "location": "MySteps.validateStatusCode(String)"
});
formatter.result({
  "duration": 113817800,
  "status": "passed"
});
formatter.before({
  "duration": 3875400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Checking the number of races",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User sets the authorization as a Basic Authorization",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User hits the API with 2022/last.json",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should validate successfully the response code as 404",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.setBasicAUth()"
});
formatter.result({
  "duration": 159300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022/last.json",
      "offset": 23
    }
  ],
  "location": "MySteps.executeAPI(String)"
});
formatter.result({
  "duration": 667746400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 55
    }
  ],
  "location": "MySteps.validateStatusCode(String)"
});
formatter.result({
  "duration": 2523900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Checking the number of races using path parameters",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races-using-path-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User sets the authorization as a Basic Authorization",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user hits the API with details \u003cURL\u003e",
  "rows": [
    {
      "cells": [
        "year"
      ],
      "line": 16
    },
    {
      "cells": [
        "2021"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should validate successfully the response code as \u003ccode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races-using-path-parameters;",
  "rows": [
    {
      "cells": [
        "URL",
        "code"
      ],
      "line": 20,
      "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races-using-path-parameters;;1"
    },
    {
      "cells": [
        "{year}/last.json",
        "200"
      ],
      "line": 21,
      "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races-using-path-parameters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5781800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Checking the number of races using path parameters",
  "description": "",
  "id": "checking-one-rest-assured-end-point-with-cucumber-framwork-bdd;checking-the-number-of-races-using-path-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User sets the authorization as a Basic Authorization",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user hits the API with details {year}/last.json",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "year"
      ],
      "line": 16
    },
    {
      "cells": [
        "2021"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should validate successfully the response code as 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.setBasicAUth()"
});
formatter.result({
  "duration": 187600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{year}/last.json",
      "offset": 31
    }
  ],
  "location": "MySteps.executeAPIwithPathparameter(String,DataTable)"
});
formatter.result({
  "duration": 867323800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 55
    }
  ],
  "location": "MySteps.validateStatusCode(String)"
});
formatter.result({
  "duration": 537400,
  "status": "passed"
});
});