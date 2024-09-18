package hooks;

import cucumber.api.java.Before;
import stepDefination.RestAssuredCheck;

public class Hooks {
	
	@Before
	public void Before() {
		RestAssuredCheck restCheck = new RestAssuredCheck();
	}

}
