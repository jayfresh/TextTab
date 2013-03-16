console.log('content script loaded');
window.onkeydown = function() {
	console.log('down', arguments);
};
window.onkeyup = function() {
	console.log('up', arguments);
};