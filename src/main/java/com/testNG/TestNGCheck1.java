package com.testNG;

import org.testng.annotations.Test;
import org.testng.ITestContext;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;

public class TestNGCheck1 extends BaseTest {
	
	@BeforeTest
	public void beforeTestExplicitly(ITestContext context) {
		System.out.println("We are in @beforeTest annotated method explicitly inside the class");
		String parameter = context.getCurrentXmlTest().getParameter("website");
		System.out.println("the value is : "+parameter);
	}
	
	
	@BeforeClass
	public void beforeClass() {
		System.out.println("We are in @BeforeClass annotated method");
	}
	
	@BeforeMethod
	public void beforeMethod() {
		System.out.println("We are in @beforeMethod annotated method");
	}
	
	
	@Test
	public void test1() {
		
		System.out.println("We are in @Test 1 annotated method");
	}
	
	@Test
	@Parameters({"website"})
	public void test2(String parameter) {
		System.out.println("The parameter value is : "+parameter);
		System.out.println("We are in @Test 2 annotated method");
	}

}
