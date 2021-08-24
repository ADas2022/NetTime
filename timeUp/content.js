chrome.runtime.onMessage.addListener(function(request) {
	alert(request)
})



chrome.alarms.onAlarm.addListener(function (alarm) {
	alert("alarm fired")
	console.log("recieved");
	
})