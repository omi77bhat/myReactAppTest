//This file will help usto make sure we can dynamically pass the element selectors.
module.exports = {
    url: 'http://localhost:8080/',
    elements: {
        clickRemoveAllButton: {
            selector: '//*[@id="root"]/div/div/div/div[2]/button',
            locateStrategy: 'xpath'
        },
        clickAddButton: {
            selector: '//*[@id="root"]/div/nav/div/li[2]/a',
            locateStrategy: 'xpath'
        },

        clickSubmitButton: {
            selector: '//*[@id="root"]/div/div/div/div/button',
            locateStrategy: 'xpath'
        },
        
        clickTutorialsButton: {
            selector: '//*[@id="root"]/div/nav/div/li[1]/a',
            locateStrategy: 'xpath'
        },

        loadTutorialDetails: {
            selector: '//*[@id="root"]/div/div/div/div[2]/ul/li',
            locateStrategy: 'xpath'
        },

        editTutorialDetails: {
            selector: '//*[@id="root"]/div/div/div/div[3]/div/a',
            locateStrategy: 'xpath'
        }
    }
};