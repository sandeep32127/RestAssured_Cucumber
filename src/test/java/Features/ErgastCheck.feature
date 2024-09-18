Feature: Checking one Rest Assured end point with cucumber framwork BDD

Scenario Outline: Checking the number of races
Given User sets the authorization as a Basic Authorization
When User hits the API with <URL>
Then User should validate successfully the response code as <code>
Examples:
|URL|code|
|2020/last.json|200|
|2022/last.json|404|


Scenario Outline: Checking the number of races using path parameters
Given User sets the authorization as a Basic Authorization
When user hits the API with details <URL>
|year|
|2021|
Then User should validate successfully the response code as <code>
Examples:
|URL|code|
|{year}/last.json|200|