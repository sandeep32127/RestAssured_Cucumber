package com.testNG;

import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;

public class BaseTest {
	
	@BeforeSuite
	public void beforeSuite() {
		System.out.println("We are in @BeforeSUite annotated method");
	}
	
	@BeforeTest
	public void beforeTest() {
		System.out.println("We are in @beforeTest annotated method");
	}

}
