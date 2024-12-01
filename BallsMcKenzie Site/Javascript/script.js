//Javascript!!!

function allowScream() {
	
	var audio = new Audio(".\\Javascript\\jsassets\\icantdie.mp3");
	audio.loop = true;
	audio.play();

}

function closeSite(){
	
	window.close();
	
}

function dopamine() {

	var index = Math.floor(Math.random()*92);
	index += 1;	

	if (index < 10) {

		document.getElementById('memetemplate').src = '.\\Javascript\\jsassets\\DopamineMemes\\meme00' + index + '.jpg';
	}
	else if (index < 24) {

		document.getElementById('memetemplate').src = '.\\Javascript\\jsassets\\DopamineMemes\\meme0' + index + '.jpg';

	}
	else {

		document.getElementById('memetemplate').src = '.\\Javascript\\jsassets\\DopamineMemes\\meme0' + index + '.jpeg';

	}
}