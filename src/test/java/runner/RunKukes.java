package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(features= {"src/test/java/Features/ErgastCheck.feature"}, glue = {"stepDefination", "hooks"},plugin = {"pretty", "html:src/test/java/cucumber.html"}, monochrome = true)/*tags = {"@Sanity,@Reg"}*/ //glue = {"steps","pages"},
@RunWith(Cucumber.class)
public class RunKukes {

}
