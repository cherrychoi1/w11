var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

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
	if (video.currentTime >= video.duraction) {
		video.currentTime = 0;
		video.play();
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muter) {
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
