
class ApiCalls {
    constructor() {

        this.server = "http://89.40.15.19";
        // this.server = "http://123.231.51.114";
        //this.server = "http://192.168.0.105";
        this.port = ":2000";
        this.port = ":5000";
        this.authPort = "";
        //cotact us api
        this.api = {
            news: "/api/news/",
        
        };

        this.ayurveda = "http://localhost:5000/news/get"
    }
}
// &api-key=5AlWHdOV6i3fZCKJ5QoxVB6LYZ3Pm05S
const ApiCallsObject = new ApiCalls();
export default ApiCallsObject;