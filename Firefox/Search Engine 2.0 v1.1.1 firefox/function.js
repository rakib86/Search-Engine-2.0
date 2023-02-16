// background.js

// listen for a click on the browser action icon
chrome.browserAction.onClicked.addListener(function() {
    // get the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // send a message to the content script to change the background color
      chrome.tabs.sendMessage(tabs[0].id, { action: "changeBackground" });
    });
  });
  
  // content.js
  
  // listen for messages from the background script
  chrome.runtime.onMessage.addListener(function(request) {
    // if the message is to change the background color
    if (request.action == "changeBackground") {
      // change the background color
      document.body.style.backgroundColor = "#00FF00";
    }
  });
  