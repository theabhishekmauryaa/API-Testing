import static io.restassured.RestAssured.given;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
public class dataDriven {
	

	String keyString = "e2ce12713f2e305b1f70740877e11235";
	String tokenString = "ATTAf292e5975837ff43236afdd9b17f2957abfed71f73114da77b64e6779ead80aaC0C2868B";
	String baseurl = "https://api.trello.com";
	String ID;
	@Test(priority = 0)
	public void createboard() {
	    Response res = given()
	        .queryParam("name", "Board123")
	    	.queryParam("key", "e2ce12713f2e305b1f70740877e11235")
	        .queryParam("token", "ATTAf292e5975837ff43236afdd9b17f2957abfed71f73114da77b64e6779ead80aaC0C2868B")  	      	        		    
	        .contentType("application/json")	      
	    .when()
	        .post("https://api.trello.com/1/boards/")
	    .then()
	        .statusCode(200)
	        .extract().response();
	    String Str = res.asString();
	    JsonPath jp = new JsonPath(Str);
	    ID = jp.get("id");
	    System.out.println(ID);
	}
	@Test(priority = 1)
	public void Get_A_Board() {
		given()
		.get(baseurl+"/1/boards/"+ID+"/?key="+keyString+"&token="+tokenString)
	    .then()
	    .log().all();
	}
	@Test(priority = 2)
	public void delete_A_Board() {
		given()
		.delete(baseurl+"/1/boards/"+ID+"?key="+keyString+"&token="+tokenString)
	    .then()
	    .log().all();
	}

}
