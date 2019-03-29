const allowedTabs = 5

chrome.tabs.onCreated.addListener(function() {
  chrome.tabs.query({}, function(tabs) {
    if(tabs.length <= allowedTabs) {
      return;
    }
    id = tabs[tabs.length - 1].id;
    chrome.tabs.remove(id, function() {});
  });
});
