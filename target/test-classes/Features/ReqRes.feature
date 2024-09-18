Feature: Checking POST request with proper body parameters

Scenario Outline: Checking the POST Endpoint with body parameters
Given User sets the authorization as a Basic Authorization
And User forms the body parameters
|Name|Job|
|Gadanayaka|Fastfood Chain Owner|
When User hits the POST End point with proper URL <url>
Then User should validate successfully the response code as <code>
Examples:
|URL|code|
|https://reqres.in/api/users|200|