import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;

public class DataDrivenTestExample {
    @DataProvider(name = "testData")
    public Object[][] testData() {
        return new Object[][] {
            {"New York", 200}, // Test data set 1: city = "New York", expected status code = 200
            {"London", 200},   // Test data set 2: city = "London", expected status code = 200
            {"Paris", 200}     // Test data set 3: city = "Paris", expected status code = 200
        };
    }
}
