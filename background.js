chrome.browserAction.onClicked.addListener(async function (tab) {
    chrome.tabs.executeScript(
        { file: 'pip.js' },
    );
})

chrome.commands.onCommand.addListener(async function (command) {
    if (command == "pip-toggle")
        chrome.tabs.executeScript(
            { file: 'pip.js' },
        );
});