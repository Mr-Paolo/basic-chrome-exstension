chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>  {
    chrome.tabs.insertCSS(
        tabs[0].id,
        {file: 'style.css'});
    // chrome.tabs.executeScript(
    //     tabs[0].id,
    //     {file: 'assets/jQuery.js'}, 
    //     function() {
    //         chrome.tabs.executeScript(
    //             tabs[0].id,
    //             {file: 'assets/script.js'});
    //     });
});
