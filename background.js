const allowedTabs = 5

chrome.tabs.onCreated.addListener(function() {
  chrome.tabs.query({}, function(tabs) {
    if(tabs.length <= allowedTabs) {
      return;
    }
    id = tabs[Math.floor(Math.random() * tabs.length)].id;
    chrome.tabs.remove(id, function() {});
  });
});
