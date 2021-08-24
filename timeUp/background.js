
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  
  chrome.alarms.create("stop watch", { delayInMinutes: request.time * 1.0 });
  sendResponse({success: true});

})


chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
  alert('Time Up');



});