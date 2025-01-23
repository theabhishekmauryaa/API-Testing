import static io.restassured.RestAssured.given;

import org.json.simple.JSONObject;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
public class dataDriven2 {
	
	   @DataProvider(name = "UserData")
	   public Object [][] data(){
		return new Object[][]
				{
			{"eve.holt@reqres.in","pistol"}
				};
		   
	   }
	   
	   @Test(dataProvider = "UserData")
	   public void Register(String Email, String Password)
	   {
		   JSONObject js =new JSONObject();
		   js.put("email", Email);
		   js.put("password", Password);
		   
		   given()
		   .contentType("application/json")
		   .body(js.toJSONString())
		   .when()
		   .post("https://reqres.in/api/register")
		   .then()
		   .statusCode(200)
		   .log().all();
	   }

}
