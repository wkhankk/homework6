var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
let vol = document.querySelector("#volume")
	vol.innerHTML=video.volume *100 + "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	var videoSpeed = video.playbackRate;
	video.playbackRate = videoSpeed - 0.5;
	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	var videoSpeed = video.playbackRate;
	video.playbackRate = videoSpeed + 0.5;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	var value = video.currentTime;
	video.currentTime += value;
	console.log("Current location is "+ video.currentTime);
}

function mute() {

if (video.muted){
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Changing to Unmuted");
		video.muted=false;
	}

else{
				document.getElementById("mute").innerHTML = "Unmute";
       	console.log("Changing to Muted");
				video.muted = true;
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	volume = volume/100;
	//console.log(volume);
	video.volume = volume;
	document.querySelector("#volume").innerHTML = volume * 100 + "%"
	console.log("volume is " + volume * 100)
}


 function gray() {
  	video.classList.add("grayscale");
		console.log("In grayscale");
 }

 function color() {
	 video.classList.remove("grayscale");
	 console.log("In color")
 }
