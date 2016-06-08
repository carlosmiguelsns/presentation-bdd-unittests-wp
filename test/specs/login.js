describe("User wants to log in the system", function(){
    this.timeout(25000);
    
    it("login account", function(done){
        browser
            .url("http://localhost:21931/wp-admin")
            .pause(1000)
            .setValue("#user_login", "admin")
            .saveScreenshot("./test/reports/images/1.jpg")
            .pause(1000)
            .setValue("#user_pass", "admin123")
            .saveScreenshot("./test/reports/images/2.jpg")            
            .pause(1000)
            .click("#wp-submit")
            .pause(3000)
            .saveScreenshot("./test/reports/images/3.jpg")
            .pause(1000)            
            .call(done)
    });
});