package stepDefination;

import java.util.HashMap;
import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

public class MySteps {
	
	Response response;
	
	/*@Given("User sets the End Point URL as (.*)")
	public void setBaseURL(String URL) {
		RestAssured.baseURI = URL;
	}*/
	
	@Given("User sets the authorization as a Basic Authorization")
	public void setBasicAUth() {
		RestAssuredCheck.setBasicAuthentication();
	}
	
	@When("User hits the API with (.*)")
	public void executeAPI(String url) {
		RestAssuredCheck.RequestGET(url);
	}
	
	@Then("User should validate successfully the response code as (.*)")
	public void validateStatusCode(String code) {
		RestAssuredCheck.validateResponseCode(Integer.parseInt(code));
	}
	
	@When("user hits the API with details (.*)")
	public void executeAPIwithPathparameter(String url , DataTable table) {
		List<List<String>> data = table.raw();
		
		HashMap<String, String> pathParams = new HashMap<>();
		pathParams.put("year", data.get(1).get(0));
		RestAssuredCheck.RequestGetwithpathParam(url, pathParams);
		
	}
	
	@And("User forms the body parameters")
	public void formRequestBody(DataTable table) {
		List<List<String>> data = table.raw();
		
		HashMap<String, String> body = new HashMap<>();
		body.put("name", data.get(1).get(0));
		body.put("job", data.get(1).get(1));
		
		RestAssuredCheck.setBody(body);
	}
	
	@When("User hits the POST End point with proper URL (.*)")
	public void executePOST(String URL) {
		RestAssuredCheck.RequestPOST(URL);
	}
}
