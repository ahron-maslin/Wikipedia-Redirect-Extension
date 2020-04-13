let filter = {
  urls: [
    "*://www.wikipedia.org/*",
    "*://en.wikipedia.org/wiki*"
  ]
};

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    var oldUrl = new URL(details.url); //get requested url
    var path = oldUrl.pathname; //get url path
    var newUrl = "https://en.m.wikipedia.org" + path; //add path to mobile domain
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function () {
      chrome.tabs.update(details.id, {
        url: newUrl
      });
    });
  }, filter);