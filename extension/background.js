(function() {
	"use strict";
	window.chrome.browserAction.onClicked.addListener(function(tab) {
		window.chrome.tabs.executeScript(null, { file: "content.js" });
	});
})();
