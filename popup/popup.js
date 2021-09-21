chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>  {
    chrome.tabs.insertCSS(
        tabs[0].id,
        {file: 'page/style.css'});
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'page/script.js'});
});
