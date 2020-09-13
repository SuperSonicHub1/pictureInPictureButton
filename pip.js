(async () => {
    if (!('pictureInPictureEnabled' in document)) {
        console.log('The Picture-in-Picture Web API is not available.');
        // chrome.browserAction.disable();
        return;
    }
    else if (!document.pictureInPictureEnabled) {
        console.log('The Picture-in-Picture Web API is disabled.');
        // chrome.browserAction.disable();
        return;
    }
    else {
        document.addEventListener('fullscreenchange', async (e) => {
            if (document.fullscreenElement && document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            }
        });

        var videoElement = document.querySelector("video");
        var buttonDisabled = true;

        if (videoElement) {
            try {
                if (videoElement !== document.pictureInPictureElement) {
                    await videoElement.requestPictureInPicture();
                    // chrome.browserAction.setBadgeText({ "text": "ON" });
                    // chrome.browserAction.setBadgeBackgroundColor({ "color": "#3498eb" })
                } else {
                    await document.exitPictureInPicture();
                    // chrome.browserAction.setBadgeText({ "text": "" });
                    // chrome.browserAction.setBadgeBackgroundColor({ "color": "" })
                }
            }
            catch (error) {
                console.error(error)
            }
            finally {
                buttonDisabled = false;
            }
        }

        if (buttonDisabled) {
            console.warn("Video element not found.")
            //chrome.browserAction.disable()
        }
            
    }
})()