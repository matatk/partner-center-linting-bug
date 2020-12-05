(function() {
	"use strict";
	const message = "Here's a localised word: " +
		window.chrome.i18n.getMessage('exampleLocalisedWord');
	const para = document.createElement('p');
	para.appendChild(document.createTextNode(message));
	document.body.prepend(para);
})();
