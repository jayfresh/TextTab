function addEventListeners(tab) {
/*
// tell the new tab what its ID is
	chrome.tabs.sendMessage(tab.id, {tadId: tab.id}, function(response) {
	    console.log(response);
	});
*/
	var tabId = tab.id;
	chrome.tabs.query({
		title: 'TextTab'
	}, function(tabs) {
		console.log(tabs);
		var i,
			t,
			tId;
		for(i=0;i<tabs.length;i++) {
			t = tabs[i];
			tId = t.id;
			if(tId!==tabId) {
				chrome.tabs.remove(tId);
			}
		}
	});
}

console.log('background script loaded');
chrome.windows.onCreated.addListener(function(w) {
	console.log('new window',w);
});
chrome.tabs.onCreated.addListener(function(t) {
	console.log('new tab',t);
	addEventListeners(t);
	
});