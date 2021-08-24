
document.addEventListener('DOMContentLoaded', function() {

	document.querySelector('button').addEventListener('click', onclick, false)
	function onclick () {

		chrome.tabs.query({currentWindow: true, active: true},
			function(tabs) {
				chrome.alarms.create('x', {delayInMinutes: 1});
				console.log("created");

				chrome.tabs.sendMessage(tabs[0].id, 'enjoy')
				
				
			})
	}


	document.getElementById('form').addEventListener('submit', function(event) {
		event.preventDefault()
		let time = document.getElementById('time').value;
		//time = 1;
		//chrome.alarms.create('x', {delayInMinutes: time});
				

		chrome.runtime.sendMessage({time}, function(feed) {
			console.log("set");
		})
	})



	
}, false)