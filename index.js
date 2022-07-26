var numberOfDrums = document.querySelectorAll(".drum").length;

//Detecting Button Press..

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            makeVoice(this.innerHTML);
            buttonPress(this.innerHTML);
        }) 
}


//Detecting Keyboard Press..

document.addEventListener("keydown", function (event) {
    makeVoice(event.key);
    buttonPress(event.key);
});



//Making Sound function

function makeVoice(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;

        default:
            console.log(this.innerHTML);
    }

}

function buttonPress(currentKey){

    var pressedKey = document.querySelector("." + currentKey);

    pressedKey.classList.add("pressed");

    setTimeout(function(){
        pressedKey.classList.remove("pressed");
    },100);

}