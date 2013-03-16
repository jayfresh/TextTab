//var tabId,
var store = window.localStorage,
	storeKey = 'textTab',
	currentNotes = store[storeKey];

/*
chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(arguments);
		if (request.tabId) {
		  tabId = request.tabId;
		}		
	}
);
*/

$(document).ready(function() {
	var body = document.getElementsByTagName('body')[0];
	body.innerHTML = currentNotes ? currentNotes : '';
    console.log('all ready');
	window.onkeyup = function() {
		console.log('up', arguments);
		store[storeKey] = body.innerHTML;
	};	
});