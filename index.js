chrome.runtime.onInstalled.addListener(() =>  {
    // 1 - SAVING something on "chrome.storage"
    // chrome.storage.sync.set({color: '#3aa757'}, () {
    //   console.log('The color is green.');
    // });
  
    // 2 - Making the popup avaiable
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            // pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

});