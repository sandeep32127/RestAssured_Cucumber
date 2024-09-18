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
  "duration": 2758142900,
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
  "duration": 613640800,
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
  "duration": 1565381600,
  "error_message": "java.net.UnknownHostException: ergast.com\r\n\tat java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\r\n\tat java.net.InetAddress$2.lookupAllHostAddr(Unknown Source)\r\n\tat java.net.InetAddress.getAddressesFromNameService(Unknown Source)\r\n\tat java.net.InetAddress.getAllByName0(Unknown Source)\r\n\tat java.net.InetAddress.getAllByName(Unknown Source)\r\n\tat java.net.InetAddress.getAllByName(Unknown Source)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:148)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:495)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:452)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:157)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:148)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepDefination.RestAssuredCheck.RequestGET(RestAssuredCheck.java:35)\r\n\tat stepDefination.MySteps.executeAPI(MySteps.java:29)\r\n\tat ✽.When User hits the API with 2020/last.json(src/test/java/Features/ErgastCheck.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.before({
  "duration": 3748800,
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
  "duration": 268700,
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
  "duration": 35069700,
  "error_message": "java.net.UnknownHostException: ergast.com\r\n\tat java.net.InetAddress.getAllByName0(Unknown Source)\r\n\tat java.net.InetAddress.getAllByName(Unknown Source)\r\n\tat java.net.InetAddress.getAllByName(Unknown Source)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:495)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:452)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepDefination.RestAssuredCheck.RequestGET(RestAssuredCheck.java:35)\r\n\tat stepDefination.MySteps.executeAPI(MySteps.java:29)\r\n\tat ✽.When User hits the API with 2022/last.json(src/test/java/Features/ErgastCheck.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 2471100,
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
  "duration": 79600,
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
  "duration": 60610200,
  "error_message": "java.net.UnknownHostException: ergast.com\r\n\tat java.net.InetAddress.getAllByName0(Unknown Source)\r\n\tat java.net.InetAddress.getAllByName(Unknown Source)\r\n\tat java.net.InetAddress.getAllByName(Unknown Source)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2055)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:495)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:452)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1451)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1200)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepDefination.RestAssuredCheck.RequestGetwithpathParam(RestAssuredCheck.java:43)\r\n\tat stepDefination.MySteps.executeAPIwithPathparameter(MySteps.java:43)\r\n\tat ✽.When user hits the API with details {year}/last.json(src/test/java/Features/ErgastCheck.feature:15)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
});