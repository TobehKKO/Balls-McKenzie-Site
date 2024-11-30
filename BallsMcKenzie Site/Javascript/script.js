//Javascript!!!

function allowScream(){
	
	var audio = new Audio("\BallsMcKenzie Site\Javascript\jsassets\icantdie.mp3");
	audio.loop = true;
	audio.play();

}

function closeSite(){
	
	window.close();
	
}

function getRandomMeme(){
	
	var index = Math.floor(Math.random()*23);
	return memesArray[index];
}

function dopamine(){

	var index = Math.floor(Math.random()*23);
	index += 1;

	if(index < 10){
		
		document.getElementById('memetemplate').src = '\\BallsMcKenzie Site\\Javascript\\jsassets\\DopamineMemes\\meme00' + index + '.jpg';
	}
	else{
		
		document.getElementById('memetemplate').src = '\\BallsMcKenzie Site\\Javascript\\jsassets\\DopamineMemes\\meme0' + index + '.jpg';
		
	}
}