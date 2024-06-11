function playSound(animalOrBird) {
    var audio = new Audio(`/Users/riyaz/Downloads/sounds/${animalOrBird}.mp3`);
    audio.play();
}
