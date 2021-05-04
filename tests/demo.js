module.exports = {
    'Test to launch website and verify Home Page of React App' : function (browser) {
      browser
        .url('http://localhost:8080/') 
        .pause(5000)
        .getTitle((title) => console.log(title))
        .assert.title('React App')
      

    },

    'To Test the ADD button functionality' : function (browser){
        var page = browser.page.selector();
        page.navigate()
        //Click on Remove All button
        .click('@clickRemoveAllButton')
        //Click on Add button
        .click('@clickAddButton')
       
        browser
        .pause(3000)
        .assert.urlContains('add','User sucessfully navigated to ADD Page.')
        //Add Title
        .useXpath().setValue('//*[@id="title"]','Tester No. 1')
        //Add description
        .useXpath().setValue('//*[@id="description"]','Functional Tester')
        .pause(3000)
        //Click on Submit button
        .useXpath().click('//*[@id="root"]/div/div/div/div/button')
        .pause(2000)
        //Verify new tutorial got added successfully
        .useXpath().assert.containsText('//*[@id="root"]/div/div/div/div/h4','You submitted successfully!')

    },


    'To Verify the added Tutorial is displayed on Tutorial Page' : function(browser){
        var page = browser.page.selector();
        page.navigate()
        //Navigate to Tutorial Page
        .click('@clickTutorialsButton')

        browser
        .pause(1000)
        //Verify that we are on Tutorial Page
        .assert.urlContains('tutorials','User has succesfully navigated to Tutorials Page.')
        //Verify the newly added tutorial is displayed on Tutorial Page
        .assert.visible('//*[@id="root"]/div/div/div/div[2]/ul/li','The newly added tutorial is reflecting as expected.')

    },


    'To Verify a user can View,Update & Save Tutorial details' : function(browser){
        var page = browser.page.selector();
        page.navigate()
        //Load the tutorial details
        .click('@loadTutorialDetails');

        browser
        //To make sure Title matches with the test data that we created
        .assert.containsText('//*[@id="root"]/div/div/div/div[3]/div/div[1]','Tester No. 1')
        //To make sure Description matches with the test data that we created
        .assert.containsText('//*[@id="root"]/div/div/div/div[3]/div/div[2]','Functional Tester')
        .getText('//*[@id="root"]/div/div/div/div[3]/div/div[3]', function(result){
            console.log('Status of tutorial : ', result.value)
        })
        .pause(3000)
        //Click Edit button
        .useXpath().click('//*[@id="root"]/div/div/div/div[3]/div/a')
        .pause(3000)
        //Clear description field
        .useXpath().clearValue('//*[@id="description"]')
        .pause(3000)
        //Update description
        .useXpath().setValue('//*[@id="description"]','Automation Tester')
        //Click on Publish button
        .pause(3000)
        .useXpath().click('//*[@id="root"]/div/div/div/div/button[1]')
        //Verify status changes to Published
        .assert.visible('//*[@id="root"]/div/div/div/div/form/div[3]','Published')
        //Now click Update button
        .useXpath().click('//*[@id="root"]/div/div/div/div/button[3]')
        .pause(3000)
        //verify if success message is displayed after update
        .assert.visible('//*[@id="root"]/div/div/div/div/p','The tutorial was updated successfully!');

        page.navigate()
        //Navigate to Tutorials Page
        .click('@clickTutorialsButton')
        //Load the tutorial details
        .click('@loadTutorialDetails');

        browser
        //To verify Description is updated
        .assert.containsText('//*[@id="root"]/div/div/div/div[3]/div/div[2]','Automation Tester')
        //To verify Status is updated 
  //      .assert.containsText('//*[@id="root"]/div/div/div/div[3]/div/div[3]','Status: Published')


    },

    'To validate the Search funconality' : function(browser){
        browser
        //search for existing tutorial
        .useXpath().setValue('//*[@placeholder="Search by title"]','Tester No. 2')
        //click search button
        .pause(2000)
        .useXpath().click('//*[@id="root"]/div/div/div/div[1]/div/div/button')
        //Verify incorrect tutorial is not displayed
        .pause(2000)
        .getText('//*[@id="root"]/div/div/div/div[3]/div/div[3]', function(result){
            if (result.status = -1) {
                console.log('->The element does not exist, search passed')
            } else {
                console.log('->The element exists, search failed')
            }
        })
          //Click on Remove All button
        .useXpath().click('//*[@id="root"]/div/div/div/div[2]/button')
        .end()
        //CI TEst
    }
};

