chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ index: tab.index + 1 });
});
