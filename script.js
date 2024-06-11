function playSound(animalOrBird) {
    var audio = new Audio(`./sounds/${animalOrBird}.mp3`);
    audio.play();
}
