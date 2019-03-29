chrome.tabs.onCreated.addListener(function() {
  chrome.tabs.query({}, function(tabs) {
    id = tabs[tabs.length - 1].id;
    chrome.tabs.remove(id, function() {});
  });
});
