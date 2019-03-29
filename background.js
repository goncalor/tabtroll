const allowedTabs = 5
const minDelay = 250
const maxDelay = 1500

chrome.tabs.onCreated.addListener(function() {
  var delay = minDelay + Math.random() * (maxDelay-minDelay);
  setTimeout(function() {troll()}, delay);
});

function troll() {
  chrome.tabs.query({}, function(tabs) {
    if(tabs.length <= allowedTabs) {
      return;
    }
    id = tabs[Math.floor(Math.random() * tabs.length)].id;
    chrome.tabs.remove(id, function() {});
  });
}
