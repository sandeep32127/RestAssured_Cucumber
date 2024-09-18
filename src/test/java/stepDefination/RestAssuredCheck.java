package stepDefination;

import java.util.Map;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class RestAssuredCheck {
	
	public static  RequestSpecification request;
	public static Response response;
	
	public RestAssuredCheck() {
		RequestSpecBuilder builder = new RequestSpecBuilder();
		builder.setBaseUri("http://ergast.com/api/f1/");
		RequestSpecification build = builder.build();
		request = RestAssured.given().spec(build);
	}
	
	public RestAssuredCheck(String baseURL) {
		RequestSpecBuilder builder = new RequestSpecBuilder();
		builder.setBaseUri(baseURL);
		RequestSpecification build = builder.build();
		request = RestAssured.given().spec(build);
	}
	
	public static void setBasicAuthentication() {
		request.auth().basic("", "");
	}
	
	public static void RequestGET(String url) {
		response = request.when().get(url);
	}
	
	public static void validateResponseCode(int statusCode) {
		response.then().assertThat().statusCode(statusCode);
	}
	
	public static void RequestGetwithpathParam(String url , Map<String,String> map) {
		 response = request.pathParams(map).when().get(url);
	}
	
	public static void setBody(Map<String,String> map) {
		String body = "{\r\n" + 
				"    \"name\": \"morpheus\",\r\n" + 
				"    \"job\": \"leader\"\r\n" + 
				"}";
		request.given().body(body);
	}
	
	public static void RequestPOST(String url) {
		try {
			
			response = request.contentType(ContentType.JSON).when().post().andReturn();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
