package com.testNG;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TestNGCheck2 extends BaseTest {
	
	@BeforeClass
	public void beforeClass() {
		System.out.println("We are in @BeforeClass annotated method 2");
	}
	
	@BeforeMethod
	public void beforeMethod() {
		System.out.println("We are in @beforeMethod annotated method 2");
	}
	
	
	@Test
	public void test1() {
		
		System.out.println("We are in @Test 1 annotated method 2");
	}
	
	@Test
	public void test2() {
		
		System.out.println("We are in @Test 2 annotated method 2");
	}

}
