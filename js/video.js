var video = document.querySelector("#player1");

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	video.currentTime+= 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Muted");
	}
});

let slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = slider.value + "%";
	console.log("Initial volume is " + video.volume);
});

// Update as user moves the slider
slider.addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("Volume is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click",function() {
	video.classList.add("oldSchool");
});

document.querySelector("#original").addEventListener("click",function() {
	video.classList.remove("oldSchool");
});