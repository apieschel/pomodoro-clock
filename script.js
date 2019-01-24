let sessionTime = document.getElementById("session-length");
	let breakTime = document.getElementById("break-length");
	let clock = document.getElementById("time-left");
	let start = document.getElementById("start_stop");
  let reset = document.getElementById("reset");
  let beep = document.getElementById("beep");
	let isBreak = false;
	let paused = true;

	clock.innerText = sessionTime.innerText + ":00";
  
  if(paused === true) {
	  start.addEventListener("click", countDown);
  } else {
    start.addEventListener("click", function() {
      paused = true;
    });
  }

	document.getElementById("session-increment").addEventListener("click", increment);
	document.getElementById("session-decrement").addEventListener("click", decrement);
	document.getElementById("break-increment").addEventListener("click", incrementBreak);
	document.getElementById("break-decrement").addEventListener("click", decrementBreak);

	function countDown() {
    
		// Clear the "pause" event listener to avoid bugs by cloning the element
		let old_element = document.getElementById("pause");
		let new_element = old_element.cloneNode(true);
    let old_start = document.getElementById("start_stop");
		let new_start = old_start.cloneNode(true);
		old_element.parentNode.replaceChild(new_element, old_element);
    old_start.parentNode.replaceChild(new_start, old_start);

		paused = false;

		let sessionVal = parseInt(sessionTime.innerText);
		let breakVal = parseInt(breakTime.innerText);
		let difference = 0;

		if(isBreak) {
			difference = breakVal;
		} else {
			difference = sessionVal;
		}

		// Set the date we're counting down to
		let countDownDate = new Date().getTime() + difference*60000;

		// Update the count down every 1 second
		let x = setInterval(function () {
			
				
			// Get todays date and time
			let now = new Date().getTime();

			// Find the distance between now and the count down date
			let distance = countDownDate - now;
			//console.log(1500000 - distance);

			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.round((distance % (1000 * 60)) / 1000);

			if(seconds === 60) {
				seconds = 0;
				minutes = minutes + 1;
			}
      
      if(seconds < 58 && seconds > 53) {
        beep.pause();
        beep.currentTime = 0;
      }

			if(seconds < 10) {
				seconds = "0" + seconds.toString();
			}
      
      if(minutes < 10) {
				minutes = "0" + minutes.toString();
			}

			// Display the result in the element with id="time-left"
			document.getElementById("time-left").innerHTML = minutes + ":" + seconds;
			document.title = "Pomodoro: " + minutes + ":" + seconds;

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("time-left").innerHTML = "00:00";

				if(isBreak) {
					//alert("Break's over! Let's get back to work.");
          beep.play();
					isBreak = false;      
		    	document.getElementById("timer-label").innerText = "Session";
				} else {
					//alert("Don't push yourself too hard! Time for a break.");
          beep.play();
					isBreak = true;
			    document.getElementById("timer-label").innerText = "Break";
				}
				countDown();
			}
			
		}, 1000);

		document.getElementById("pause").addEventListener("click", function() {

			if(paused){ 
				let time = document.getElementById("time-left").innerText; 

				if(time.length > 2) {
					let seconds = parseInt(time.slice(-2));
					let minutes = parseInt(time.substr(0, time.indexOf(':')));
					countDownDate = new Date().getTime() + minutes*60000 + seconds*1000;
				} else {
					let minutes = parseInt(time);
					countDownDate = new Date().getTime() + minutes*60000;
				}

				paused=false; 
				x = setInterval(function () {
					
						
			// Get todays date and time
			let now = new Date().getTime();

			// Find the distance between now and the count down date
			let distance = countDownDate - now;
			//console.log(1500000 - distance);

			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.round((distance % (1000 * 60)) / 1000);

			if(seconds === 60) {
				seconds = 0;
				minutes = minutes + 1;
			}
          
      if(seconds < 58 && seconds > 53) {
        beep.pause();
        beep.currentTime = 0;
      }

			if(seconds < 10) {
				seconds = "0" + seconds.toString();
			}
          
      if(minutes < 10) {
				minutes = "0" + minutes.toString();
			}

			// Display the result in the element with id="time-left"
			document.getElementById("time-left").innerHTML = minutes + ":" + seconds;
			document.title = "Pomodoro: " + minutes + ":" + seconds;

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("time-left").innerHTML = "00:00";

				if(isBreak) {
					//alert("Break's over! Let's get back to work.");
          beep.play();
					isBreak = false;
			    document.getElementById("timer-label").innerText = "Session";
				} else {
					//alert("Don't push yourself too hard! Time for a break.");
          beep.play();
					isBreak = true;
			    document.getElementById("timer-label").innerText = "Break";
				}
				countDown();
			}
					
				}, 1000); 
			} else { 
				paused=true; 
				clearInterval(x);
			} 
		});
    
    document.getElementById("start_stop").addEventListener("click", function() {
      console.log(isBreak);
			if(paused){ 
				let time = document.getElementById("time-left").innerText; 

				if(time.length > 2) {
					let seconds = parseInt(time.slice(-2));
					let minutes = parseInt(time.substr(0, time.indexOf(':')));
					countDownDate = new Date().getTime() + minutes*60000 + seconds*1000;
				} else {
					let minutes = parseInt(time);
					countDownDate = new Date().getTime() + minutes*60000;
				}

				paused=false; 
				x = setInterval(function () {
					
						
			// Get todays date and time
			let now = new Date().getTime();

			// Find the distance between now and the count down date
			let distance = countDownDate - now;
			//console.log(1500000 - distance);

			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.round((distance % (1000 * 60)) / 1000);

			if(seconds === 60) {
				seconds = 0;
				minutes = minutes + 1;
			}
          
      if(seconds < 58 && seconds > 53) {
        beep.pause();
        beep.currentTime = 0;
      }

			if(seconds < 10) {
				seconds = "0" + seconds.toString();
			}
          
      if(minutes < 10) {
				minutes = "0" + minutes.toString();
			}

			// Display the result in the element with id="time-left"
			document.getElementById("time-left").innerHTML = minutes + ":" + seconds;
			document.title = "Pomodoro: " + minutes + ":" + seconds;

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("time-left").innerHTML = "00:00";

				if(isBreak) {
					//alert("Break's over! Let's get back to work.");
          beep.play();
					isBreak = false;      
			    document.getElementById("timer-label").innerText = "Session";
				} else {
					//alert("Don't push yourself too hard! Time for a break.");
          beep.play();
					isBreak = true;
			    document.getElementById("timer-label").innerText = "Break";
				}
				countDown();
			}
					
				}, 1000); 
			} else { 
				paused=true; 
				clearInterval(x);
			} 
		});
    
    reset.addEventListener("click", function() {
      paused = true;
      isBreak = false;
      clearInterval(x);
      document.getElementById("time-left").innerHTML = "00:00";
      beep.pause();
      beep.currentTime = 0;
			document.getElementById("timer-label").innerText = "Session";
      sessionTime.innerHTML = "25";
      breakTime.innerHTML = "5";
      document.getElementById("time-left").innerHTML = "25:00";
    });

	}

	function increment() {
		if(paused) {
			isBreak = false;
			let val = sessionTime.innerText;
      let sessVal;
			val = parseInt(val);
			if(val < 60) { 
				val = val + 1;
			}
      
      if(val < 10) {
        sessVal = "0" + val.toString();
      } else {
        sessVal = val.toString();
      }
      
			sessionTime.innerHTML = val;
			document.getElementById("time-left").innerText = sessVal + ":00";
			document.getElementById("timer-label").innerText = "Session";
		}
	} 

	function decrement() {
		if(paused) {
			isBreak = false;
			let val = sessionTime.innerText;
      let sessVal;
			val = parseInt(val);
			if(val > 1) { 
				val = val - 1;
			} 
       if(val < 10) {
        sessVal = "0" + val.toString();
      } else {
        sessVal = val.toString();
      }
			sessionTime.innerHTML = val;
			document.getElementById("time-left").innerText = sessVal + ":00";
			document.getElementById("timer-label").innerText = "Session";
		}
	}

	function incrementBreak() {
		if(paused) {
			let val = breakTime.innerText;
			val = parseInt(val);
			if(val < 60) { 
				val = val + 1;
			} 
			breakTime.innerHTML = val;
		}
	} 

	function decrementBreak() {
		if(paused) {
			let val = breakTime.innerText;
			val = parseInt(val);
			if(val > 1) { 
				val = val - 1;
			} 
			breakTime.innerHTML = val;
		}
	}

	function intervalCount(countDownDate) {

		let now = new Date().getTime();

		let distance = countDownDate - now;
		//console.log(1500000 - distance);

		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.round((distance % (1000 * 60)) / 1000);

		if(seconds === 60) {
			seconds = 0;
			minutes = minutes + 1;
		}
    
    if(seconds < 58 && seconds > 53) {
        beep.pause();
        beep.currentTime = 0;
    }

		if(seconds < 10) {
			seconds = "0" + seconds.toString();
		}
    
    if(minutes < 10) {
			minutes = "0" + minutes.toString();
		}

		// Display the result
		document.getElementById("time-left").innerHTML = minutes + ":" + seconds;
		document.title = "Pomodoro: " + minutes + ":" + seconds;

		// If the count down is finished, clear the interval, then alert and switch between break / session
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("time-left").innerHTML = "00:00";

			if(isBreak) {
				//alert("Break's over! Let's get back to work.");
        beep.play();
				isBreak = false;
			  document.getElementById("timer-label").innerText = "Session";
			} else {
				//alert("Don't push yourself too hard! Time for a break.");
        beep.play();
				isBreak = true;
			  document.getElementById("timer-label").innerText = "Break";
			}
			countDown();
		}
	}